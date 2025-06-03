int ledNome = 13;
void setup(){
  pinMode(ledNome, OUTPUT);
}

void loop(){
  digitalWrite(ledNome,HIGH);
  delay(5000);
  digitalWrite(ledNome,LOW);
  delay(5000);
}
