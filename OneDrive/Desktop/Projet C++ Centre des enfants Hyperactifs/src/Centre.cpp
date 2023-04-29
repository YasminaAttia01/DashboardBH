#include "Centre.h"
#include "Personne.h"
#include "Enfant.h"
#include "Medecin.h"
#include "Administrateur.h"
#include "Service.h",
#include "Education.h"
#include "Hyperactif.h"
#include "Medicale.h"
#include <typeinfo>
Centre::Centre(int a, string b, string c, float s, int e, int f, int g, int l)
{
    id_centre = a;
    nom_centre = b;
    adresse_centre = c;
    budget_centre = s;
    nbre_Enfants = e;
    nbr_dispo = f;
    nbr_employe = g;
    nbr_service = l;
}
istream &operator>>(istream &in, Centre &c)
{
    cout << "id_centre :" << endl;
    in >> c.id_centre;
    cout << "nom_centre :" << endl;
    in >> c.nom_centre;
    cout << "Donner l adresse du centre" << endl;
    in >> c.adresse_centre;
    cout << "nbre des Enfants" << endl;
    in >> c.nbre_Enfants;
    cout << "nombre de place disponible :" << endl;
    in >> c.nbr_dispo;
    cout << "Donner le nombre d'employers" << endl;
    in >> c.nbr_employe;
    cout << "Donner le nombre de services :" << endl;
    in >> c.nbr_service;
    for (int i = 0; i < c.nbre_Enfants; i++)
    {
        Enfant enf;
        Enfant *q;
        in >> enf;
        if ((enf.getEnfanthyper()) == "Hyperactif")
        {
            long x;
            string y;
            cout << "duree :" << endl;
            cin >> x;
            cout << "motif :" << endl;
            cin >> y;
            q = new Hyperactif(enf.getidP(),enf.getnom(), enf.getprenom(), enf.getNumTel(), x, y);
        }
        else
        {
            q = new Enfant(enf);
        }
        c.pers.push_back(q);
    }
    cout << "remplir tableau employee" << endl;
    for (int i = 0; i < c.nbr_employe; i++)
    {
        string x;
        Employee *q;
        cout << "administrateur ou medecin ?" << endl;
        cin >> x;
        if (x == "administrateur")
        {
            q = new Administrateur;
        }
        else
        {
            q = new Medecin;
        }
        in >> *q;
        c.emp.push_back(q);
    }

    cout << "remplir tableau service " << endl;

    for (int i = 0; i < c.nbr_service; i++)
    {

        for (int i = 0; i < c.nbr_employe; i++)
        {
            string x;
            Service *q;
            cout << "educatif ou Medicale ? " << endl;
            cin >> x;
            if (x == "educatif")
            {
                q = new Education;
            }

            else
            {
                q = new Medicale;
            }
            q->saisir();
            c.serv.push_back(q);
        }
        return in;
    }
}
void Centre::ajouter_emp(Employee *p)
{
    if (typeid(*p) == typeid(Administrateur))
    {
        Employee *q;
        q = new Administrateur(static_cast< Administrateur &>(*p));
        emp.push_back(q);
    }
    else if (typeid(*p) == typeid(Medecin))
    {
        Employee *q;
        q = new Medecin(static_cast< Medecin &>(*p));
        emp.push_back(q);
    }
    nbr_employe += 1;
}
void Centre::ajouter_pers(Enfant *enf)
{
    if (nbr_dispo != 0)
    {
        Enfant *q;
        if ((enf->getEnfanthyper()) == "Hyperactif")
        {
            long x;
            string y;
            cout << "duree :" << endl;
            cin >> x;
            cout << "motif :" << endl;
            cin >> y;
            q = new Hyperactif(enf->getidP(),enf->getnom(), enf->getprenom(), enf->getNumTel() ,x, y);
        }
        else
        {
            q = new Enfant(*enf);
        }
        pers.push_back(q);
        nbr_dispo -= 1;
        nbre_Enfants += 1;

        // Supprimer les objets Enfant et Hyperactif qui ne sont plus utilisés
        for (int i = 0; i < pers.size(); i++)
        {
            if (typeid(*pers[i]) == typeid(Enfant))
            {
                delete dynamic_cast<Enfant *>(pers[i]);
            }
            else if (typeid(*pers[i]) == typeid(Hyperactif))
            {
                delete dynamic_cast<Hyperactif *>(pers[i]);
            }
        }
    }
    else
    {
        cout << "il n'y a pas de disponibilite" << endl;
    }
}

int Centre::supprimer_pers(int id)
{
    for (int i = 0; i < emp.size(); i++)
    {
        if (id == emp[i]->getidP())
        {
            delete emp[i]; // Supprimer l'objet de la mémoire
            emp.erase(emp.begin() + i);
            nbr_employe -= 1;
            return 1;
        }
    }

    for (int i = 0; i < pers.size(); i++)
    {
        if (id == pers[i]->getidP())
        {
            delete pers[i]; // Supprimer l'objet de la mémoire
            pers.erase(pers.begin() + i);
            nbre_Enfants -= 1;
            nbr_dispo += 1;
            return 1;
        }
    }

    cout << "il n'y a pas cette personne" << endl;
    return 0;
}

ostream &operator<<(ostream &out, Centre &c)
{
    cout << "id_centre :";
    out << c.id_centre << endl;
    cout << "nom_centre :";
    out << c.nom_centre << endl;
    cout << "Donner l adresse du centre";
    out << c.adresse_centre << endl;
    cout << "nbre des Enfants";
    out << c.nbre_Enfants << endl;
    cout << "nombre de place disponible :";
    out << c.nbr_dispo << endl;
    cout << "Donner le nombre d'employers";
    out << c.nbr_employe << endl;
    cout << "Donner le nombre de services :" << endl;
    out << c.nbr_service;
    for (int i = 0; i < c.nbre_Enfants; i++)
    {
        c.pers[i]->afficher();
    }
    cout << "Afficher tableau employee" << endl;
    for (int i = 0; i < c.nbr_employe; i++)
    {
        c.emp[i]->afficher();
    }

    cout << "Afficher tableau service " << endl;

    for (int i = 0; i < c.nbr_employe; i++)
    {
        c.serv[i]->afficher();
    }
    return out;
}
istream &operator>>(istream &in, Centre *c)
{
    in.seekg(0);
    cout << "id_centre :" << endl;
    in >> c->id_centre;
    cout << "nom_centre :" << endl;
    in >> c->nom_centre;
    cout << "Donner l adresse du centre" << endl;
    in >> c->adresse_centre;
    cout << "nbre des Enfants" << endl;
    in >> c->nbre_Enfants;
    cout << "nombre de place disponible :" << endl;
    in >> c->nbr_dispo;
    cout << "Donner le nombre d'employers" << endl;
    in >> c->nbr_employe;
    cout << "Donner le nombre de services :" << endl;
    in >> c->nbr_service;
    for (int i = 0; i < c->nbre_Enfants; i++)
    {
        Enfant enf;
        Enfant *q;
        cin >> enf;
        if ((enf.getEnfanthyper()) == "Hyperactif")
        {
            long x;
            string y;
            cout << "duree :" << endl;
            cin >> x;
            cout << "motif :" << endl;
            cin >> y;
            q = new Hyperactif(enf.getidP(),enf.getnom(), enf.getprenom(), enf.getNumTel(), x, y);
        }
        else
            q = new Enfant(enf);
        c->pers.push_back(q);
    }
    for (int i = 0; i < c->nbre_Enfants; i++)
    {
        in >> *(c->pers[i]);
    }
    cout << "remplir tableau employee" << endl;
    for (int i = 0; i < c->nbr_employe; i++)
    {
        string x;
        Employee *q;
        cout << "administrateur ou medecin ?" << endl;
        cin >> x;
        if (x == "administrateur")
        {
            q = new Administrateur;
        }
        else
        {
            q = new Medecin;
        }
        in >> *q;
        c->emp.push_back(q);
    }

    cout << "remplir tableau service " << endl;

    for (int i = 0; i < c->nbr_employe; i++)
    {
        string x;
        Service *q;
        cout << "educatif ou Medicale? " << endl;
        cin >> x;
        if (x == "educatif")
            q = new Education;
        else
            q = new Medicale;
        q->saisir();
        c->serv.push_back(q);
    }
    return in;
}
void Centre::creer(fstream &f)
{
    f.open("d:\\projet.txt", ios::in | ios::out | ios::trunc);
    if (!f.is_open())
        exit;
}
void Centre::remplir(fstream &f)
{
    Centre c;
    cout << "ecrire les donn�es du centre " << endl;
    cin >> c;
    f << c << endl;
}
void Centre::afficher(fstream &f)
{
    Centre c;
    f.seekg(0);
    f >> c;
    cout << c << endl;
}
ostream &operator<<(ostream &out, Centre *c)
{
    cout << "id_centre :" << endl;
    out << c->id_centre << setw(10);
    cout << "nom_centre :" << endl;
    out << c->nom_centre << setw(10);
    cout << "Donner l adresse du centre" << endl;
    out << c->adresse_centre << setw(10);
    cout << "nbre des enfants" << endl;
    out << c->nbre_Enfants << setw(10);
    cout << "nombre de place disponible :" << endl;
    out << c->nbr_dispo << setw(10);
    cout << "Donner le nombre d'employers" << endl;
    out << c->nbr_employe << setw(10);
    cout << "Donner le nombre de services :" << endl;
    out << c->nbr_service << setw(10);
    for (int i = 0; i < c->nbre_Enfants; i++)
    {
        out << *(c->pers[i]) << setw(10);
    }
    cout << "Afficher tableau employee" << endl;
    for (int i = 0; i < c->nbr_employe; i++)
    {
        out << *(c->emp[i]) << setw(10);
    }

    cout << "Afficher tableau service " << endl;

    for (int i = 0; i < c->nbr_employe; i++)
    {
        out << *(c->serv[i]) << setw(10);
    }
    return out;
}
Centre::~Centre()
{
    // dtor
}
