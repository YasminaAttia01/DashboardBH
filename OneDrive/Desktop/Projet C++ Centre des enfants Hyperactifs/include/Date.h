#ifndef DATE_H
#define DATE_H

#include <iostream>

class Date {
public:
    Date() : Jour(12), Mois(7), Annee(2001) {} // Constructeur par défaut
    Date(int jour, int mois, int annee);
    int getJour() const;
    int getMois() const;
    int getAnnee() const;
    void setJour(int jour);
    void setMois(int mois);
    void setAnnee(int annee);
    friend std::istream& operator>>(std::istream& is, Date& date);
    virtual ~Date();
private:
    int Jour;
    int Mois;
    int Annee;
};

#endif // DATE_H
