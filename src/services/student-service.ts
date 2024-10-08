import { studentRepository } from "../repository/index";
interface FilterData {
  ID?: String;
  BATCH?: String;
  year?: String | { $regex: String; $options: String };
  NAME?: String | { $regex: String; $options: String };
  RefId?: String | { $regex: String; $options: String };
  branch?: String | { $regex: String; $options: String };
  DISTRICT?: String | { $regex: String; $options: String };
  SCHOOL?: String | { $regex: String; $options: String };
}

const studentServices = {
  async uploadStudentsData(ID:String,data: {}) {
    try {
      return await studentRepository.uploadStudentsData(ID,data);
    } catch (error) {
      throw error;
    }
  },
  async upploadStudentHostelData(ID: String, data: {}) {
    try {
      return await studentRepository.updateStudentById(ID, data);
    } catch (error) {
      throw error;
    }
  },
  async getStudentById(ID: String) {
    try {
      const student = await studentRepository.getStudentById(ID);
      if (!student) {
        return { status: 404, message: "Student not found" };
      }
      return { status: 200, student };
    } catch (error) {
      throw error;
    }
  },
  
  async getAllStudents(
    ID: String,
    BATCH: String,
    year: String,
    NAME: String,
    RefId: String,
    branch: String,
    DISTRICT: String,
    SCHOOL: String
  ) {
    const filterData: FilterData = {};
    if (ID) {
      filterData.ID = ID;
    }
    if (BATCH) {
      filterData.BATCH = BATCH;
    }
    if (year) {
      filterData.year = { $regex: year, $options: "i" };
    }
    if (NAME) {
      filterData.NAME = { $regex: NAME, $options: "i" };
    }
    if (RefId) {
      filterData.RefId = { $regex: RefId, $options: "i" };
    }
    if (branch) {
      filterData.branch = { $regex: branch, $options: "i" };
    }
    if (DISTRICT) {
      filterData.DISTRICT = { $regex: DISTRICT, $options: "i" };
    }
    if (SCHOOL) {
      filterData.SCHOOL = { $regex: SCHOOL, $options: "i" };
    }
    // console.log(filterData);
    try {
      const students = await studentRepository.getAllStudents(filterData);

      if (!students) {
        return { status: 404, message: "Student not found" };
      }
      return { status: 200, students };
    } catch (error) {
      throw error;
    }
  },

  async updateStudent(ID: String, data: {}) {
    try {
      const students = await studentRepository.updateStudentById(ID, data);
      if (!students) {
        return { message: "Student not found" };
      }
      return students;
    } catch (error) {
      throw error;
    }
  },
};

export default studentServices;
