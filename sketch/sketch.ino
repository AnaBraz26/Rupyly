#include <SoftwareSerial.h>
SoftwareSerial hc06(10,11);
byte estado;
int direcao_e = 4;
int velocidade_e = 3;
int direcao_d = 7;
int velocidade_d = 6;
int velocidade = 100;
void setup(){
  hc06.begin(9600);
  Serial.begin(9600);
  pinMode(2,OUTPUT);

}
void loop(){
  if(hc06.available()){
     estado = hc06.read();
    Serial.print(estado);
    Serial.print(' ');

  }
  Serial.println(estado);
  if(estado == 'p'){
     digitalWrite(2,HIGH);
    digitalWrite(direcao_e,LOW);
    analogWrite(velocidade_e, 0);
    digitalWrite(direcao_d,LOW);
    analogWrite(velocidade_d, 0);

  }
  if(estado == 'c'){
     digitalWrite(2,LOW);
    digitalWrite(direcao_e,HIGH);
    analogWrite(velocidade_e, velocidade);
    digitalWrite(direcao_d,HIGH);
    analogWrite(velocidade_d, velocidade);

  }
  if(estado == 'b'){
     digitalWrite(2,LOW);
    digitalWrite(direcao_e,HIGH);
    analogWrite(velocidade_e, velocidade);
    digitalWrite(direcao_d,LOW);
    analogWrite(velocidade_d, velocidade);

  }
  if(estado == 'd'){
     digitalWrite(2,LOW);
    digitalWrite(direcao_e,HIGH);
    analogWrite(velocidade_e, velocidade);
    digitalWrite(direcao_d,LOW);
    analogWrite(velocidade_d, 0);

  }
  if(estado == 'e'){
     digitalWrite(2,LOW);
    digitalWrite(direcao_e,LOW);
    analogWrite(velocidade_e, 0);
    digitalWrite(direcao_d,HIGH);
    analogWrite(velocidade_d, velocidade);

  }
  delay(50);

}
