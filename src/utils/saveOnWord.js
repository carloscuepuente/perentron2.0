// librerías
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

// el formato de word

const documento = "/AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx";

// función para cargar el documento
function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

// la función para generar los words
const saveOnWord = (
  date,
  overtimeType,
  duty,
  cause,
  justificationInfo,
  groupInfo
) => {
  // https://docxtemplater.com/tag-example.docx
  for (let i = 0; i < groupInfo.length; i++) {
    loadFile(documento, function (error, content) {
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      // let zip = new PizZip();
      // zip.file("AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx", content, { binary: true })
      let doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.setData({
        duty: duty,
        date: date,
        //
        cause: cause,
        //
        fltNumber: justificationInfo.fltNumber,
        sta: justificationInfo.sta,
        ata: justificationInfo.ata,
        reg: justificationInfo.reg,
        //
        positionRelief: justificationInfo.positionRelief,
        nameRelief: justificationInfo.nameRelief,
        causeRelief: justificationInfo.causeRelief,
        //
        positionAbsence: justificationInfo.positionAbsence,
        nameAbsence: justificationInfo.nameAbsence,
        causeAbsence: justificationInfo.causeAbsence,
        //
        services: justificationInfo.services,
        exceptional: justificationInfo.exceptional,
        //
        name: groupInfo[i].name,
        clockIn: groupInfo[i].clockIn,
        clockOut: groupInfo[i].clockOut,
        realClockOut: groupInfo[i].realClockOut
          ? groupInfo[i].realClockOut
          : "",
        overtime: groupInfo[i].realClockOut ? groupInfo[i].overtime : "",
      });
      try {
        doc.render();
      } catch (error) {
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all sub errors).
        function replaceErrors(key, value) {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function (
              error,
              key
            ) {
              error[key] = value[key];
              return error;
            },
            {});
          }
          return value;
        }
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map(function (error) {
              return error.properties.explanation;
            })
            .join("\n");
          console.log("errorMessages", errorMessages);
          // errorMessages is a humanly readable message looking like this :
          // 'The tag beginning with "foobar" is unopened'
        }
        throw error;
      }

      let out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(
        out,
        `AH-HR-R07-REGISTRO-HORAS-PERENTORIAS${groupInfo[i].name}.docx`
      );
    });
  }
};

export default saveOnWord;
