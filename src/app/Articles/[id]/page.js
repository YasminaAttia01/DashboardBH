"use client";
import { Pencil, Upload } from "lucide-react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import Modal from "../../components/modal";
import { useSide } from "@/app/context/sideContext";
import Sidebar from "@/app/components/Sidebar";
import axios from "axios";
const DetailArticle = () => {
  const [product, setProduct] = useState(null);
  const initialState = {
    name: "",
    category: "",
    stock: "",
    puissance: "",
    poids: "",
    deimension: "",
    description: "",
    volume: "",
    farineCapacity: "",
    patteCapacity: "",
    vitesse: "",
    cuveCapacity: "",
    alimentation: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked ? "available" : "out_of_stock",
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = window.location.pathname.split("/").pop();
        const response = await axios.get(
          "https://back.durandfrenchmix.fr/api/batteurs/" + slug
        );
        if (response.data === null) {
          const response2 = await axios.get(
            "https://back.durandfrenchmix.fr/api/petrins/" + slug
          );
          setProduct(response2.data);
          setFormData(response2.data);
        } else {
          setProduct(response.data);
          setFormData(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const { sidebar, setsidebar, handleSidebar } = useSide();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  //onClick={() => setShowModal(false)}
  const supprimerimage = (index,image)=>{
    if(index!=-1){
    axios
      .post(
        `https://back.durandfrenchmix.fr/api/${
          product.category === "Batteur Mélangeur" ? "batteurs" : "petrins"
        }/delete-picture/${product.slug}`,
        {index : index},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        const updatedImages = [...product.images]; 
        updatedImages.splice(index, 1); 
        setProduct({ ...product, images: updatedImages });
      })
      .catch((error) => {
        console.error("Error deleting images:", error);
      });
    }
  }
  const handleSubmit = async () => {
    try {
      if (product.category === "Batteur Mélangeur") {
        await axios.put(
          "https://back.durandfrenchmix.fr/api/batteurs/edit/" + product.slug,
          formData
        );
      } else {
        await axios.put(
          "https://back.durandfrenchmix.fr/api/petrins/edit/" + product.slug,
          formData
        );
      }
      setShowModal(false);
      setProduct(formData);
    } catch (err) {
      console.error(err);
    }
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (!files) return;
    const images = Array.from(files);
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    axios
      .post(
        `https://back.durandfrenchmix.fr/api/${
          product.category === "Batteur Mélangeur" ? "batteurs" : "petrins"
        }/add-picture/${product.slug}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setFormData((prevState) => ({
          ...prevState,
          images: [...(prevState?.images || []), ...response?.data.newImages],
        }));
        const updatedImages = [...product.images]; 
        updatedImages.push(response?.data.newImages);
        setProduct({ ...product, images: updatedImages });
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };
  return (
    <>
      <Sidebar user={'fanta'} />
      <main className=" min-h-screen flex flex-col sm:flex-col lg:flex-row ">
        <div className="bg-tertiary w-full flex flex-col px-9 py-5 text-white gap-y-12">
          <div className="flex flex-row justify-between">
            <button
              onClick={() => {
                handleSidebar();
              }}
            >
              <ChevronDoubleRightIcon className="h-10 w-10 text-primary hover:text-primaryHover" />
            </button>
            <div className="w-[35px]  lg:hidden   ">
              <img src="/logo.svg" />
            </div>
          </div>
          <h1 className="text-[35px] font-bold ">{product?.name} </h1>
          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-14">
              <p className="text-[20px] font-semibold">
                Catégorie :{" "}
                <span className="font-light">{product?.category} </span>
              </p>
              <p className="text-[20px] font-semibold">
                Nom : <span className="font-light">{product?.name} </span>
              </p>
              <p className="text-[20px] font-semibold">
                Modèle : <span className="font-light">{product?.model} </span>
              </p>
              <p className="text-[20px] font-semibold">
                Puissance :{" "}
                <span className="font-light">{product?.puissance} </span>
              </p>
              <p className="text-[20px] font-semibold">
                Poids : <span className="font-light">{product?.poids} </span>
              </p>
            </div>
            <div className="flex flex-col gap-14">
              <p className="text-[20px] font-semibold">
                Dimension :{" "}
                <span className="font-light">{product?.dimensions} </span>
              </p>
              {product?.category === "Batteur Mélangeur" ? (
                <p className="text-[20px] font-semibold">
                  Capacité de la cuvette :{" "}
                  <span className="font-light">{product?.cuveCapacity}</span>
                </p>
              ) : (
                <></>
              )}
              {product?.category === "Batteur Mélangeur" ? (
                <p className="text-[20px] font-semibold">
                  Alimentation :{" "}
                  <span className="font-light">{product?.alimentation}</span>
                </p>
              ) : (
                <></>
              )}
              {product?.category === "Batteur Mélangeur" ? (
                <p className="text-[20px] font-semibold">
                  Vitesse :{" "}
                  <span className="font-light">{product?.vitesse}</span>
                </p>
              ) : (
                <></>
              )}
              {product?.category === "Pétrin Spirale" ? (
                <p className="text-[20px] font-semibold">
                  Capacité de farine :{" "}
                  <span className="font-light">{product?.farineCapacity}</span>
                </p>
              ) : (
                <></>
              )}
              {product?.category === "Pétrin Spirale" ? (
                <p className="text-[20px] font-semibold">
                  Capacité de patte :{" "}
                  <span className="font-light">{product?.patteCapacity}</span>
                </p>
              ) : (
                <></>
              )}
              {product?.category === "Pétrin Spirale" ? (
                <p className="text-[20px] font-semibold">
                  Volume : <span className="font-light">{product?.volume}</span>
                </p>
              ) : (
                <></>
              )}
              <p className="text-[20px] font-semibold">
                Stock : <span className="font-light">{product?.stock}</span>
              </p>
            </div>
          </div>

          <button className="self-end " onClick={() => setShowModal(true)}>
            <Pencil size={40} />
          </button>
          <Modal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            title={"Modifier Article"}
          >
            <div className="flex items-center   w-3/4 mb-6">
              <label className="text-white w-[220px] ">Nom</label>
              <input
                name="name"
                placeholder="nom"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="rounded p-1 w-full text-black"
              />
            </div>

            <div className="flex items-center  w-3/4 mb-6">
              <label className="text-white w-[220px]  ">Modéle</label>
              <input
                name="model"
                placeholder="modéle"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
                required
                className="rounded p-1 w-full text-black"
              />
            </div>

            <div className="flex items-center   w-3/4 mb-6">
              <label className="text-white w-[220px]  ">Puissance</label>
              <input
                name="puissance"
                placeholder="puissance"
                value={formData.puissance}
                onChange={(e) => handleChange("puissance", e.target.value)}
                required
                className="rounded p-1 w-full text-black"
              />
            </div>
            <div className="flex items-center   w-3/4 mb-6">
              <label className="text-white w-[220px]  ">Poids</label>
              <input
                name="poids"
                placeholder="poids"
                value={formData.poids}
                onChange={(e) => handleChange("poids", e.target.value)}
                required
                className="rounded p-1 w-full text-black"
              />
            </div>
            <div className="flex items-center   w-3/4 mb-6">
              <label className="text-white w-[220px]  ">Dimension</label>
              <input
                name="dimensions"
                placeholder="dimension"
                value={formData.dimensions}
                onChange={(e) => handleChange("dimensions", e.target.value)}
                required
                className="rounded p-1 w-full text-black"
              />
            </div>
            {product?.category === "Pétrin Spirale" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">
                  Capacité de farine
                </label>
                <input
                  name="farineCapacity"
                  placeholder="capacité de farine"
                  value={formData.farineCapacity}
                  onChange={(e) =>
                    handleChange("farineCapacity", e.target.value)
                  }
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}
            {product?.category === "Pétrin Spirale" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">
                  Capacité de patte
                </label>
                <input
                  name="patteCapacity"
                  placeholder="capacité de patte"
                  value={formData.patteCapacity}
                  onChange={(e) =>
                    handleChange("patteCapacity", e.target.value)
                  }
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}
            {product?.category === "Pétrin Spirale" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">Volume</label>
                <input
                  name="volume"
                  placeholder="volume"
                  value={formData.volume}
                  onChange={(e) => handleChange("volume", e.target.value)}
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}
            {product?.category === "Batteur Mélangeur" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">
                  Capacité de cuve
                </label>
                <input
                  name="cuveCapacity"
                  placeholder="Capacité de cuve"
                  value={formData.cuveCapacity}
                  onChange={(e) => handleChange("cuveCapacity", e.target.value)}
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}
            {product?.category === "Batteur Mélangeur" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">Alimentation</label>
                <input
                  name="alimentation"
                  placeholder="alimentation"
                  value={formData.alimentation}
                  onChange={(e) => handleChange("alimentation", e.target.value)}
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}
            {product?.category === "Batteur Mélangeur" ? (
              <div className="flex items-center   w-3/4 mb-6">
                <label className="text-white w-[220px]  ">Vitesse</label>
                <input
                  name="vitesse"
                  placeholder="vitesse"
                  value={formData.vitesse}
                  onChange={(e) => handleChange("vitesse", e.target.value)}
                  required
                  className="rounded p-1 w-full text-black"
                />
              </div>
            ) : (
              <></>
            )}

            <div className="flex items-center   w-3/4 mb-6">
              <label className="text-white w-[220px]  ">stock</label>
              <input
                type="checkbox"
                name="stock"
                checked={formData.stock === "available"}
                onChange={handleCheckboxChange}
                className=" p-2 w-full  h-6   "
              />
            </div>

            <button
              className="flex justify-center items-center place-self-end text-gray font-bold bg-secondary hover:bg-secondaryHover focus:outline-none text-sm rounded-lg px-6 py-1  "
              onClick={() => handleSubmit()}
            >
              Modifier
            </button>
          </Modal>
        </div>
        <div className="bg-white  flex flex-col w-full   px-9  py-6 gap-y-16 ">
          <div className="w-[35px] self-end max-lg:hidden   ">
            <img src="/logo.svg" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-9   ">
            <div className="    lg:w-[450px]    ">
              <img
                src={`https://back.durandfrenchmix.fr/api/${
                  product?.images[product?.images.length - 1]
                }`}
              />
            </div>
            <div className=" bg-tertiary rounded-[15px] text-center w-fit px-10 py-5 flex flex-row justify-center items-center gap-14 cursor-pointer">
              <input
                className="hidden"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="text-lg font-bold text-white cursor-pointer"
              >
                charger une image
              </label>
              <Upload color="white" size={35} />
            </div>
            <div className=" bg-red-600	 rounded-[15px] text-center w-fit px-10 py-5 flex flex-row justify-center items-center gap-9 cursor-pointer" onClick={() => setShowModal2(true)}>
              <label
                className="text-lg font-bold text-white cursor-pointer"
              >
                Supprimer une image 
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
            </div>
            <Modal
            isVisible={showModal2}
            onClose={() => setShowModal2(false)}
            title={"Supprimer une image"}
          >
      <div className=" max-h-[80vh] overflow-auto ">
          <div className="  flex flex-row gap-10 items-center flex-wrap">
           {product && product.images && product.images.map((image, index) => (
              <div className="relative" key={index}>
                <img className="h-[150px] w-[150px] " src={`https://back.durandfrenchmix.fr/api/${image}`} alt={`Product Image ${index + 1}`} />
                <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={()=>supprimerimage(index,image)} >
      Supprimer
    </div>
              </div>
            ))}
          </div>
          </div>
          </Modal>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailArticle;
