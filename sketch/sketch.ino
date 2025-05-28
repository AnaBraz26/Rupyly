#include <Servo.h>
int buzzerb1 = 4;
int led1 = 2;
int led2 = 3;
Servo motorNome;
void setup(){
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
  pinMode(buzzerb1,OUTPUT);
  motorNome.attach(13);
  motorNome.write(0);

}
void loop(){
  digitalWrite(led1,HIGH);
  digitalWrite(led2,HIGH);
  digitalWrite(buzzerb1,HIGH);
  motorNome.write(90);
  delay(500);
  digitalWrite(led1,LOW);
  digitalWrite(led2,LOW);
  motorNome.write(0);
  digitalWrite(buzzerb1,HIGH);
  delay(500);

}
