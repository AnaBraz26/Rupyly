#include <Servo.h>
Servo motorcabeca;
int buzzerb1 = 4;
int ledl1 = 2;
int ledl2 = 3;
void setup(){
  pinMode(ledl1,OUTPUT);
  pinMode(ledl2,OUTPUT);
  pinMode(buzzerb1,OUTPUT);

}
void loop(){
  digitalWrite(buzzerb1,HIGH);
  digitalWrite(ledl1,HIGH);
  digitalWrite(ledl2,HIGH);
  delay(500);
  digitalWrite(buzzerb1,LOW);
  digitalWrite(ledl1,LOW);
  digitalWrite(ledl2,LOW);
  delay(500);

}
