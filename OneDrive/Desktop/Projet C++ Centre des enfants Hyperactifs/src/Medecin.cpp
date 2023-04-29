#include "Medecin.h"

// Constructeur par defaut
Medecin::Medecin() : Employee(), Specialite(""), horraireTravail(), CIN(0), Email("") {}

// Constructeur avec parametres
Medecin::Medecin(Employee *e, string specialite, int cin, string email) :
    Employee(*e), Specialite(specialite), horraireTravail(), CIN(cin), Email(email) {}

// Constructeur de copie
Medecin::Medecin(Medecin& other) :
    Employee(other), Specialite(other.Specialite), horraireTravail(other.horraireTravail),
    CIN(other.CIN), Email(other.Email) {}

// Methodes d'acces
void Medecin::saisir() {
    Employee::saisir();
    int currentHeur,currentMinutes,currentSecondes;
    cout << "Specialite : ";
    cin >> Specialite;
    cout << "CIN : ";
    cin >> CIN;
    cout << "Email : ";
    cin >> Email;
    cout << "Horaire de travail : " << endl;
    cout << "Saisir l'heur : " << endl;
    cin >> currentHeur;
    cout << "Saisir les minutes : " << endl;
    cin >> currentMinutes;
    cout << "Saisir les secondes : " << endl;
    cin >> currentSecondes;
    horraireTravail.setHeures(currentHeur);
    horraireTravail.setMinutes(currentMinutes);
    horraireTravail.setSecondes(currentSecondes);
}
void Medecin::afficher() {
    Employee::afficher();
    cout << "Specialite : " << Specialite << endl;
    cout << "CIN : " << CIN << endl;
    cout << "Email : " << Email << endl;
    cout << "Horaire de travail : ";
    horraireTravail.afficher();
}

Temps Medecin::getHorraireTravail() const {
    return horraireTravail;
}

void Medecin::setHorraireTravail(const Temps& horraireTravail) {
    this->horraireTravail = horraireTravail;
}

// Surcharge des operateurs d'entree/sortie
ostream& operator<<(ostream& out, Medecin& med) {
    out << (Employee&) med << endl;
    out << "Specialite : " << med.Specialite << endl;
    out << "CIN : " << med.CIN << endl;
    out << "Email : " << med.Email << endl;
    out << "Horaire de travail : ";
    out << med.horraireTravail << endl;
    return out;
}

istream& operator>>(istream& in, Medecin& med) {
    in >> (Employee&) med;
    cout << "Specialite : ";
    in >> med.Specialite;
    cout << "CIN : ";
    in >> med.CIN;
    cout << "Email : ";
    in >> med.Email;
    cout << "Horaire de travail : " << endl;
    in >> med.horraireTravail;
    return in;
}
