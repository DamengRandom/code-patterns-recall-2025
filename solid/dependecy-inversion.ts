// Dependency Inversion Principle:

// High level modules should not depend on low level modules, both should depend on abstractions.
// Abstractions should not depend on details, details should depend on abstractions (abstraction could be treated as interfaces).

// One class should not use another class directly, it should be rejected into that class.
// Should define an interface and let the class implement the interface.

// Sudo-code Example:

class Mail {
  send(content: string) {
    console.log(content);
  }
}

class Order {
  completeOrder() {
    new Mail().send('Order completed'); // ❌❌❌ One class should not use another class directly, it should be rejected into that class.
  }
}

// Better approach:
// Define an interface for the order class to use
interface IMailService {
  send: (content: string) => void;
}
class NewMail implements IMailService {
  send(content: string) {
    console.log(content);
  }
}

class NewOrder {
  completeOrder(mailService: IMailService) {
    mailService.send('Order completed'); // ✅✅✅ now, we inject the mail as interface and let the class to use its functions directly
  }
}

