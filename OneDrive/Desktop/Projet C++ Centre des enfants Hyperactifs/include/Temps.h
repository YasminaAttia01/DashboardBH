#ifndef TEMPS_H
#define TEMPS_H
#include <iostream>
#include <iomanip>

class Temps {
private:
    int heures;
    int minutes;
    int secondes;
public:
    Temps();
    Temps(int heures, int minutes, int secondes);
    friend std::ostream& operator<<(std::ostream& os, const Temps& t);
    friend std::istream& operator>>(std::istream& is, Temps& t);
    int getHeures() const;
    int getMinutes()const;
    int getSecondes()const;
    void setHeures(int heures);
    void setMinutes(int minutes);
    void setSecondes(int secondes);
    void ajouterSecondes(int secondes);
    void afficher();
};

#endif
