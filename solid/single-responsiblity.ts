// Single Responsibility Principle:

// A class should have only one responsibility.

// Sudo-code Example:

class InternalEmployeeService {
  constructor(info) {
    this.info = info;
  }

  saveEmployeeInfo() {
    try {
      // eg: save to database:
      this.dbService.save(this.info);
      console.log("Saving employee info to database: ", this.info);
    } catch (error) {
      console.error("Error saving employee info to database: ", error);
      throw error;
    }
  }
}

class NotificationService {
  constructor(info) {
    this.info = info;
  }

  sendNotification() {
    try {
      // eg: kafka emit message:
      this.kafkaService.emit("employee-info", this.info);
      console.log("Sending notification to employee: ", this.info);  
    } catch (error) {
      console.error("Error sending notification to employee: ", error);
      throw error;
    }
  }
}

class UserService {
  constructor(userInfo) {
    this.userInfo = userInfo;
  }
  
  addNewUser() {
    try {
      // eg: save to database:
      this.InternalEmployeeService.saveEmployeeInfo(this.userInfo); // save to database
      this.NotificationService.sendNotification(this.userInfo); // send notification
      console.log("Adding new user to database: ", this.userInfo);
    } catch (error) {
      console.error("Error adding new user to database: ", error);
      throw error;
    }
  }
}

// In this example, we have three classes:
// - InternalEmployeeService: responsible for saving employee info to database
// - NotificationService: responsible for sending notification to employee

// These 2 service only do their own single job, single responsibility.
