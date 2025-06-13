#include <Servo.h>
int ledVerde = 7;
int ledVermelho = 6;
int ledBuzzer = 5;

Servo motor_Erekopapa;

void setup(){
  pinMode(ledVerde, OUTPUT);
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledBuzzer, OUTPUT);
  motor_Erekopapa.attach(12);
}

void loop(){
  digitalWrite(ledVerde,HIGH);
  digitalWrite(ledVermelho,HIGH);
  delay(500);
  motor_Erekopapa.write(0);
  delay(2000);
  digitalWrite(ledBuzzer,HIGH);
  delay(1000);
  digitalWrite(ledBuzzer,LOW);
  delay(500);
  digitalWrite(ledVerde,LOW);
  digitalWrite(ledVermelho,LOW);
  motor_Erekopapa.write(60);
  delay(2000);
  digitalWrite(ledBuzzer,HIGH);
  delay(2000);
  digitalWrite(ledBuzzer,LOW);
  delay(1000);
}
