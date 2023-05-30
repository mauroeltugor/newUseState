/*At Mundo Animal Veterinary, hairdressing, bathing, and veterinary services are provided.
The employees available to provide the hairdressing service are: Ana and Claudio. The employees
Available to provide the bathroom service are Milena, Rosa and María. The employees available for
provide the veterinary service are: Raúl and Laura. The rates for the different services offered
for the vet are:
SERVICE FEE
Grooming $30,000 DOGS, $40,000 CATS
BATHROOM $25,000 CATS, $35,000 DOGS
VETERINARY $30,000 CONSULTATIONS,
$120,000 STERILIZATION
Create an application for Mundo Animal vet that allows users to select the
service they want and know its price, also select the employee who will attend the request of the
service, finally, the application must allow the user to schedule the day and time in which he wants the
service. Finally, once the process is finished by the user, the application must show this
a summary of the transaction made, for example:
Mr. Juan Mata, your appointment for the bathroom service has been scheduled for the next 28th of
September 2022 with a value of $40,000.*/

const getUsername = (message) => {
    let username = prompt(message);
    return username;
  };
  
  const getService = (message) => {
    let service = prompt(message);
    return service;
  };
  
  const validateEmployee = (service) => {
    if (
      service === "haircut" ||
      service === "HAIRCUT" ||
      service === "Haircut"
    ) {
      alert("The available employees for the haircut service are Ana and Claudio");
    } else if (
      service === "bath" ||
      service === "BATH" ||
      service === "Bath"
    ) {
      alert("The available employees for the bath service are Milena, Rosa, and Maria");
    } else if (
      service === "veterinary" ||
      service === "VETERINARY" ||
      service === "Veterinary"
    ) {
      alert("The available employees for the veterinary service are Raul and Laura");
    }
  };
  
  const getEmployee = (message) => {
    let employeeNames = prompt(message);
    return employeeNames;
  };
  
  const getPetType = (message) => {
    let petType = prompt(message);
    return petType;
  };
  
  const getServiceDate = (message) => {
    let date = prompt(message);
    return date;
  };
  
  const getServiceTime = (message) => {
    let time = prompt(message);
    return time;
  };
  
  const validateService = (service, petType) => {
    if (
      service === "haircut" ||
      service === "HAIRCUT" ||
      service === "Haircut"
    ) {
      if (petType === "cat" || petType === "CAT" || petType === "Cat") {
        return 40000;
      } else if (petType === "dog" || petType === "DOG" || petType === "Dog") {
        return 30000;
      }
    } else if (
      service === "bath" ||
      service === "BATH" ||
      service === "Bath"
    ) {
      if (petType === "cat" || petType === "CAT" || petType === "Cat") {
        return 25000;
      } else if (petType === "dog" || petType === "DOG" || petType === "Dog") {
        return 35000;
      }
    } else if (
      service === "veterinary" ||
      service === "VETERINARY" ||
      service === "Veterinary"
    ) {
      let subService = prompt(
        "Do you need a consultation or the sterilization service?"
      );
      if (
        subService === "consultation" ||
        subService === "CONSULTATION" ||
        subService === "Consultation"
      ) {
        return 30000;
      } else if (
        subService === "sterilization" ||
        subService === "STERILIZATION" ||
        subService === "Sterilization"
      ) {
        return 120000;
      }
    }
  };
  
  const showServiceInfo = (
    username,
    service,
    serviceDate,
    serviceTime,
    serviceCost
  ) => {
    alert(
      `Mr./Mrs. ${username}, your appointment for the ${service} service has been scheduled for ${serviceDate} at ${serviceTime} with a cost of ${serviceCost}.`
    );
  };
  
  const main = () => {
    let username = getUsername("Please enter your name");
    let date = getServiceDate(
      "Please enter the day and month you want to schedule the service"
    );
    let time = getServiceTime("Please enter the time you want to schedule the service");
    let selectedService = getService("Please enter the type of service you want");
    validateEmployee(selectedService);
    let selectedEmployee = prompt(
      "Please enter the name of the employee you have chosen for your service"
    );
    let petType = getPetType(
      "Please enter the type of pet for the service (dog or cat)"
    );
    let cost = validateService(selectedService, petType);
    showServiceInfo(
      username,
      selectedService,
      petType,
      selectedEmployee,
      date,
      time,
      cost
    );
  };
  
  main();
  