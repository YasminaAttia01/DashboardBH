"use client";
import { PlusIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from "react";
import Modal from "../components/modal";
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { useSide } from '../context/sideContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
export default function Articles() {
  const [id ,setid]=useState(6);
  const { sidebar,setsidebar,handleSidebar} = useSide();
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ value: 'Batteur', label: 'Batteur' });
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const respons = await axios.get("http://localhost:3001/api/batteurs/all")
        const respons1 = await axios.get("http://localhost:3001/api/petrins/all")
        console.log(respons)
        setProducts(respons.data.concat(respons1.data))

      } catch (error) {
      }
    }
    fetchdata()
  }, [])
  const router = useRouter();

  const initialState = {
    name: "",
    description: "",
    model: "",
    cuveCapacity: "",
    puissance: "",
    poids: "",
    alimentation: "",
    vitesse: "",
    dimensions: "",
    stock: "available",
    patteCapacity: "",
    farineCapacity: "",
    volume: "",
    images: [],



  }
  const [formData, setFormData] = useState(initialState);
  const handleModalSubmit = async (e) => {
    try {
      console.log(formData)
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("model", formData.model);
      formDataToSend.append("cuveCapacity", formData.cuveCapacity);
      formDataToSend.append("puissance", formData.puissance);
      formDataToSend.append("poids", formData.poids);
      formDataToSend.append("alimentation", formData.alimentation);
      formDataToSend.append("vitesse", formData.vitesse);
      formDataToSend.append("dimensions", formData.dimensions);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("farineCapacity", formData.farineCapacity);
      formDataToSend.append("patteCapacity", formData.patteCapacity);
      formDataToSend.append("volume", formData.volume);
      formData.images.forEach((image) => {
        formDataToSend.append("images", image);
      });
      if (selectedOption.label === 'Batteur') {
        const res = await axios.post("http://localhost:3001/api/batteurs/add", formDataToSend, {

          headers: {
            "Content-Type": "multipart/form-Data",
          },
        });
        setProducts(products.concat(res.data.batteur))
      }
      else {
        const res = await axios.post("http://localhost:3001/api/petrins/add", formDataToSend, {

          headers: {
            "Content-Type": "multipart/form-Data",
          },
        });
        setProducts(products.concat(res.data.petrin))
      }


      setShowModal(false)

    } catch (error) {
      console.log(error)
    }
  };
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  }

  const options = [
    { value: 'Batteur', label: 'Batteur' },
    { value: 'Petrin', label: 'Petrin' },
  ];
  const deleteArticle = async ({ slug,category }) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        if (category==="Batteur Mélangeur"){
          await axios.delete(`http://localhost:3001/api/batteurs/delete/${slug}`);
        }
        else {
          await axios.delete(`http://localhost:3001/api/petrins/delete/${slug}`);
        }
        const updatedproducts = products.filter((article) => article.slug !== slug);
        setProducts(updatedproducts);  
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  return (
    <>
     <Sidebar  />
    <div className="h-screen	 w-full px-10 pt-5 flex flex-col  items-center justify-between"  >
      <div className='flex w-full justify-between mb-5 '>  {/*navbar*/}
        <div className='flex items-center space-x-6'>
          <button  onClick={()=>{handleSidebar()}}>
            <ChevronDoubleRightIcon className="h-10 w-10 text-primary hover:text-primaryHover" />
          </button>
          <h1 className='text-tertiary text-xl font-bold'>Articles</h1>

        </div>
        <Image src={require("../../../public/logo.png")} width={40} height={30} className='mr-5' alt="Logo" />
      </div>
      <div className='flex  flex-col overflow-auto w-full items-center'>

        {products.map((item) => {
          return (
            <ArticleCard category={item.category} key={item.id} slug={item.slug} title={item.name} image={item.images[0]} deleteFunction={deleteArticle} />


          )
        })}
      </div>
      <button className="w-[60px] h-[60px] flex justify-center items-center place-self-end   text-white bg-primary hover:bg-primaryHover focus:outline-none font-medium text-sm rounded-lg my-5 mr-5" onClick={() => setShowModal(true)}>
        <PlusIcon className="h-14 w-6 " />
      </button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title={"Ajouter Article"}

      >
        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Category</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>

        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px] '>Nom</label>
          <input
            name="name"
            placeholder="nom"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>


        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Description</label>
          <input
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>
        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Model</label>
          <input
            name="model"
            placeholder="model"
            value={formData.model}
            onChange={(e) => handleChange("model", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>
        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Dimensions</label>
          <input
            name="dimensions"

            placeholder="dimensions"
            value={formData.dimensions}
            onChange={(e) => handleChange("dimensions", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>

        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Puissance</label>
          <input
            name="puissance"
            placeholder="puissance"
            value={formData.puissance}
            onChange={(e) => handleChange("puissance", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>
        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]  '>Poids</label>
          <input
            name="poids"
            placeholder="poids"
            value={formData.poids}
            onChange={(e) => handleChange("poids", e.target.value)}
            required
            className='rounded p-1 w-full'
          />
        </div>
        {selectedOption.label === "Batteur" ?
          <>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>Alimentation</label>
              <input
                name="alimentation"
                placeholder="alimentation"
                value={formData.alimentation}
                onChange={(e) => handleChange("alimentation", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>Vitesse</label>
              <input
                name="vitesse"
                placeholder="vitesse"
                value={formData.vitesse}
                onChange={(e) => handleChange("vitesse", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>CuveCapacity</label>
              <input
                name="cuveCapacity"
                placeholder="cuveCapacity"
                value={formData.cuveCapacity}
                onChange={(e) => handleChange("cuveCapacity", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
          </>
          :
          <>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>Farine Capacity</label>
              <input
                name="farineCapacity"
                placeholder="farineCapacity"
                value={formData.farineCapacity}
                onChange={(e) => handleChange("farineCapacity", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>Patte Capacity</label>
              <input
                name="patteCapacity"
                placeholder="patteCapacity"
                value={formData.patteCapacity}
                onChange={(e) => handleChange("patteCapacity", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
            <div className='flex items-center   w-10/12 mb-3'>
              <label className='text-white w-[180px]  '>Volume</label>
              <input
                name="volume"
                placeholder="volume"
                value={formData.volume}
                onChange={(e) => handleChange("volume", e.target.value)}
                required
                className='rounded p-1 w-full'
              />
            </div>
          </>
        }



        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white   '>Disponibilité</label>
          <input
            name="stock"
            type="checkbox"

            checked={formData.stock === "available"}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                stock: prevData.stock === "available" ? "out_of_stock" : "available",
              }));
            }}
            required
            className='h-4 w-4 ml-14 border-black '
          />
        </div>
        <div className='flex items-center   w-10/12 mb-3'>
          <label className='text-white w-[180px]'>Images</label>
          <input
            name="image"
            accept='image/*'
            multiple
            type='file'

            onChange={(e) => {
              const files = e.target.files
              if (files) {
                const fileList = Array.from(files);
                setFormData((prevData) => ({
                  ...prevData,
                  images: fileList,
                }));
              }
            }}


            className='rounded p-1 w-full'
          />
        </div>
        <button type="submit" className="flex justify-center items-center place-self-end   text-gray font-bold	 bg-secondary hover:bg-secondaryHover focus:outline-none font-medium text-sm rounded-lg px-6 py-1 " onClick={() => handleModalSubmit()}>
          Ajouter
        </button>
      </Modal>

    </div>
  </>);
}

