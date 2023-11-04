export default interface DeliveryMechanism {
  prompt(question: string): string;
  deliver(text: string): void;
}
