#include "Date.h"
#include <iostream>

Date::Date(int jour, int mois, int annee)
    :Jour(jour), Mois(mois), Annee(annee) {
    // ctor
}

int Date::getJour() const {
    return Jour;
}

int Date::getMois() const {
    return Mois;
}

int Date::getAnnee() const {
    return Annee;
}

void Date::setJour(int jour) {
    Jour = jour;
}

void Date::setMois(int mois) {
    Mois = mois;
}

void Date::setAnnee(int annee) {
    Annee = annee;
}

std::istream& operator>>(std::istream& is, Date& date) {
    int jour, mois, annee;
    char separator1, separator2;
    is >> jour >> separator1 >> mois >> separator2 >> annee;
    if (separator1 != '/' || separator2 != '/') {
        is.setstate(std::ios::failbit);
    }
    else {
        date.setJour(jour);
        date.setMois(mois);
        date.setAnnee(annee);
    }
    return is;
}

Date::~Date() {
    // dtor
}

