#include "Temps.h"
#include <iostream>

using namespace std;

Temps::Temps() {
    heures = 0;
    minutes = 0;
    secondes = 0;
}
std::ostream& operator<<(std::ostream& os, const Temps& t)
{
    os << std::setfill('0') << std::setw(2) << t.getHeures() << ":"
       << std::setfill('0') << std::setw(2) << t.getMinutes() << ":"
       << std::setfill('0') << std::setw(2) << t.getSecondes();
    return os;
}

std::istream& operator>>(std::istream& is, Temps& t) {
    char delim;
    is >> t.heures >> delim >> t.minutes>>delim>>t.secondes;
    return is;
}


Temps::Temps(int heures, int minutes, int secondes) {
    this->heures = heures;
    this->minutes = minutes;
    this->secondes = secondes;
}

int Temps::getHeures() const{
    return heures;
}

int Temps::getMinutes() const{
    return minutes;
}

int Temps::getSecondes()const {
    return secondes;
}

void Temps::setHeures(int heures) {
    this->heures = heures;
}

void Temps::setMinutes(int minutes) {
    this->minutes = minutes;
}

void Temps::setSecondes(int secondes) {
    this->secondes = secondes;
}

void Temps::ajouterSecondes(int secondes) {
    this->secondes += secondes;
    if (this->secondes >= 60) {
        this->secondes -= 60;
        this->minutes++;
        if (this->minutes >= 60) {
            this->minutes -= 60;
            this->heures++;
            if (this->heures >= 24) {
                this->heures = 0;
            }
        }
    }
}

void Temps::afficher() {
    cout << heures << ":" << minutes << ":" << secondes << endl;
}
