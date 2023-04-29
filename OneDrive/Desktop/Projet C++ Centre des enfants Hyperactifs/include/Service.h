#ifndef SERVICE_H
#define SERVICE_H
#include <string>
#include <iostream>

using namespace std;

class Service
{
    protected:
    int id_service;
    string nom_service;
    string description;
    int frais;
    public:
       virtual void saisir()=0;
       friend istream& operator>>(istream&,Service&) ;
        friend ostream& operator <<(ostream&,Service&);
        Service(int=0,string="",string="",int=0);
        virtual void afficher()=0;
        virtual ~Service();
};
#endif
