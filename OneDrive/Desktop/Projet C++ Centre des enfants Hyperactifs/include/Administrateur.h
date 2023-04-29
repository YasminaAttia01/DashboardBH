#ifndef ADMINISTRATEUR_H
#define ADMINISTRATEUR_H
#include"Date.h"

#include <Employee.h>


class Administrateur : public Employee
{
    string departement;
    public:
        Administrateur(string a="", string b="", int c=0, int d=0, int e=0, string f="", Date g=Date(), int h=0, string i="", float j=0.0, string k="") : Employee(a, b, c, d, e, f, g, h, i, j), departement(k) {}
        void saisir () ;
        void afficher () ;
        friend istream& operator>>(istream&  ,Administrateur& ) ;
       friend ostream& operator<<(ostream&  ,Administrateur& );
        virtual ~Administrateur();

    protected:

    private:
};

#endif // ADMINISTRATEUR_H
