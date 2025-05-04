// Interface Segregation Principle:

// We need to define multiple specific interfaces separately, not a general interface.
// Then, when each of speicfic class needs one or multiple of these interfaces, the class can implement these specific interfaces separately.
// Simple word: class only pick up what it needs, not more, not less.
// I use, I call, I don't use, I don't call.

// Example:

// As you can see, the interface IFile is too general, it includes too many methods, which is not good.
// So we need to define multiple specific interfaces separately.
interface IFile {
  write(content: string): void;
  read(content: string): any;
  format(content: string): void;
}

class WriteFile implements IFile {
  write(content: string): void {
    try {
      this.dbService.save('log.txt', content);
      console.log(content);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  read(content: string): string {
    return content?.toString() || '';
  }

  format(content: string): void {
    try {
      // convert file content to json
      const afterFormat = this.convertHelperClass.convertToJson(content);
      console.log(afterFormat);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Updated version:

interface IFileWrite {
  write(content: string): void;
}

interface IFileRead {
  read(content: string): any;
}

interface IFileFormat {
  format(content: string): void;
}

// Now, the class WriteFileClass only implements the methods that it needs, which is write method from IFileWrite interface.
class WriteFileClass implements IFileWrite {
  write(content: string): void {
    try {
      this.dbService.save('log.txt', content);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
