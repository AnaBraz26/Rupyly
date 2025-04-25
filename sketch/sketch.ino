int ledNome = 0;
void setup(){
  pinMode(ledNome,OUTPUT);

}
void loop(){
  digitalWrite(ledNome,HIGH);
  delay(500);
  digitalWrite(ledNome,HIGH);
  delay(500);

}
