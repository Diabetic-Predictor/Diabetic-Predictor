const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createDoctor(email, name, password) {
  return prisma.doctor.create({
    data: {
      email,
      name,
      password,
    },
  });
}

// async function findDoctorByEmail(email) {
//     const doctor = await prisma.doctor.findUnique({
//     where: { email},
//     });
//     console.log( doctor)
//   return doctor
// }

async function findDoctorByEmail(email) {
    try {
    return await prisma.doctor.findUnique({
      where: {email},
    });
  } catch (error) {
    console.error("Error finding doctor by email:", error);
    throw error;
  }
}


const getAllPatientsOfDoctor = async (doctorId) => {
  try {
    return await prisma.patient.findMany({
      where: {
        doctorId: doctorId,
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};


async function createPatient(patientData) {
   try {
     return prisma.patient.create({ data: patientData });
   } catch (error) {
     throw error;
   }
}

async function updatePatientStatus(predictionData) {
    try {
        return await prisma.patient.update({
          where: { id: patientData.id }, // Assuming you have an 'id' field for patients
          data: { prediction: predictionData },
        });
    } catch (error) {
      throw error;
    }

}


module.exports = {
  createDoctor,
  findDoctorByEmail,
  getAllPatientsOfDoctor,
  createPatient,
  updatePatientStatus,
};
