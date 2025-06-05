#include <Servo.h>
int ledesquerdo = 12;
int leddireito = 11;
int buzzermusic = 7;
Servo motormot;
void setup(){
  pinMode(ledesquerdo, OUTPUT);
  pinMode(leddireito, OUTPUT);
  pinMode(buzzermusic, OUTPUT);
  motormot.attach(13);
}

void loop(){
  digitalWrite(leddireito,HIGH);
  digitalWrite(ledesquerdo,HIGH);
  digitalWrite(buzzermusic,HIGH);
  motormot.write(0);
  delay(2000);
  digitalWrite(leddireito,LOW);
  digitalWrite(ledesquerdo,LOW);
  digitalWrite(buzzermusic,LOW);
  motormot.write(90);
  delay(2000);
}
