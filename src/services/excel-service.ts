// const { ExcelRepository } = require("../repository/index");
import excelRepository from "../repository/excel-repository";
const excelServices = {
  async uploadMsiExcel(data: {}) {
    console.log("in servicees: ", data);
    try {
      return await excelRepository.uploadMsiFile(data);
    } catch (error) {
      throw error;
    }
  },
  async uploadBankMsExcel(data: {}) {
    // console.log("in servicees: ", data);
    try {
      return await excelRepository.uploadBankMsFile(data);
    } catch (error) {
      throw error;
    }
  },
  async getBankMsi() {
    try {
      return await excelRepository.getBankMsi();
    } catch (error) {
      throw error;
    }
  },
};

export default excelServices;