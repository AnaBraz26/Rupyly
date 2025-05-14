int ledNome = 11;
void setup(){
  pinMode(ledNome,OUTPUT);

}
void loop(){
  digitalWrite(ledNome,HIGH);
  delay(200);
  digitalWrite(ledNome,LOW);
  delay(200);

}
