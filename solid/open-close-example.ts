// Open/Closed Principle:

// Open for extension, closed for modification.
// We just need to add new classes, not modify existing ones (只是增加新代码逻辑到现有的代码逻辑，不去修改现有的代码逻辑).

// Advantages:
// 1. Easy to extend the functionality of the code.
// 2. Easy to maintain the code.
// 3. Easy to test the code.
// 4. Easy to refactor the code.
// 5. Easy to add new features to the code.
// 6. Easy to remove features from the code.
// 7. Easy to modify the code.


// Sudo-code Example:

// Not cool example:
class OldStorage {
  saveFile(content, type) {
    if (type === "local") {
      // save to local storage
      console.log("Saving file to local storage: ", content);
      this.dbService.save(content);
    }
    if (type === "remote") {
      // save to remote storage
      console.log("Saving file to remote storage: ", content);
      this.dbService.save(content);
    }
    // ... bad thing is needs to keep add more if statements later on which is not a good practice ...
  }
}
// Better approach:
class BaseStorage { // 定义一个基类
  saveFile(content) {
    try {
      console.log("Saving file to storage: ", content);
      this.dbService.save(content);
    } catch (error) {
      console.error("Error saving file to storage: ", error);
      throw error;
    }
  }
}

// extends new code logics based on the base class
class LocalStorage extends BaseStorage {
  saveLocalFile(content) {
    try {
      this.saveFile(content);
      console.log("Saving file to local storage: ", content);
    } catch (error) {
      console.error("Error saving file to local storage: ", error);
      throw error;
    }
  }
}

// not modify the existing Storage class
class RemoteStorage extends BaseStorage {
  saveRemoteFile(content) {
    try {
      this.saveFile(content);
      console.log("Saving file to remote storage: ", content);
    } catch (error) {
      console.error("Error saving file to remote storage: ", error);
      throw error;
    }
    this.saveFile(content);
  }
}
// we also only need to test new added code logics, nothing breaks with the existing code logics.
