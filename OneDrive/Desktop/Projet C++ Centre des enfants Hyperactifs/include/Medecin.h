#ifndef MEDECIN_H
#define MEDECIN_H
#include "Employee.h"
#include "Temps.h"
#include <string>


using namespace std;

class Medecin : public Employee
{
    public:
        Medecin(Employee* e, string specialite="", int cin=0, string email="");
        Medecin();
        Medecin(Medecin&);
        void saisir();
        void afficher();
        // Getter
        string getSpecialite();
        int getCIN() ;
        string getEmail();
        Temps getHorraireTravail() const;
        void setHorraireTravail(const Temps& horraireTravail);
        friend ostream& operator<< (ostream& , Medecin& );
        friend istream& operator>> (istream& , Medecin& );



    protected:
        string Specialite;
        Temps horraireTravail;
        int CIN;
        string Email;
    private:
};

#endif // MEDECIN_H
