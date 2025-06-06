// Strategy Pattern

// Concept: Define a family of algorithms, encapsulate each one, and make them interchangeable.

// The goal is to create different type of alerts based on different alert data structure.

// Example:
interface Config<T> {
  subject: string;
  type: string;
  isValidPhoneNumber: boolean;
  phone: string;
  props: T;
}

interface AlertStrategy {
  notify(message: string): void;
}

type EmailConfig = {
  email: string;
};

type SmsConfig = {
  sms: string;
};

type ConfigUnion = EmailConfig | SmsConfig;

const mockConfigs: Config<ConfigUnion>[] = [{
  subject: 'Alert For Email',
  type: 'email',
  isValidPhoneNumber: false,
  phone: '1234567890',
  props: {
    email: 'test@test.com',
  },
}, {
  subject: 'Alert For SMS',
  type: 'sms',
  isValidPhoneNumber: true,
  phone: '48934367764',
  props: {
    sms: '48934367764',
  },
}];

class ConfigService {
  constructor() {}

  isSmsConfig(config: Config<ConfigUnion>): config is Config<SmsConfig> {
    return config.type === 'sms' && 'sms' in config.props;
  }

  getConfigs(type: string): Config<ConfigUnion> | undefined {
    return mockConfigs.find(config => config.type === type);
  }

  isEmailConfig(config: Config<ConfigUnion>): config is Config<EmailConfig> {
    return config.type === 'email';
  }
}

class EmailService {
  constructor() {}

  send(configs: Config<EmailConfig>, message: string) {
    console.log('Sending email to', configs.subject, message);
  }
}

class SmsService {
  constructor() {}

  send(configs: Config<SmsConfig>, message: string) {
    console.log('Sending sms to', configs.subject, message);
  }
}

class EmailAlertWithStrategy implements AlertStrategy {
  constructor(private configService: ConfigService, private emailService: EmailService) {}

  notify(message: string) {
    const configs = this.configService.getConfigs('email');
    if (!configs) throw new Error('Email config not found');
    
    if (this.configService.isEmailConfig(configs)) {
      this.emailService.send(configs, message);
    } else {
      throw new Error('Invalid Email configuration');
    }
  }
}

class SMSAlertWithStrategy implements AlertStrategy {
  constructor(private configService: ConfigService, private smsService: SmsService) {}

  notify(message: string) {
    const configs = this.configService.getConfigs('sms');
    if (!configs) throw new Error('SMS config not found');
    
    if (this.configService.isSmsConfig(configs)) {
      this.smsService.send(configs, message);
    } else {
      throw new Error('Invalid SMS configuration');
    }
  }
}

class AlertService {
  private alertStrategy: AlertStrategy;

  setStrategy(strategy: AlertStrategy) {
    this.alertStrategy = strategy;
  }

  sendAlert(message: string) {
    this.alertStrategy.notify(message);
  }
}

const configService = new ConfigService();
const emailService = new EmailService();
const smsService = new SmsService();

const emailAlert = new EmailAlertWithStrategy(configService, emailService);
const smsAlert = new SMSAlertWithStrategy(configService, smsService);

const alertService = new AlertService();

alertService.setStrategy(emailAlert);
alertService.sendAlert('Hello, email alert message sent!');

alertService.setStrategy(smsAlert);
alertService.sendAlert('Hello, sms alert message sent!');
