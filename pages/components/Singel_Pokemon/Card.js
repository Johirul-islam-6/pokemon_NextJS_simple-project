import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ post }) => {
    return (
        <div>
            <Link href={`/post/${post?.id}`}>

                <div className="pokemon_Card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        {/* <Image src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                        <Image className='pokemonImage' src='/pokemon.png' alt="image" width={200} height={200}></Image>
                    </figure>
                    <div className="title flex justify-between md:px-5 mt-5" >
                        <h1>Name JxtS</h1>
                        <div className="div flex gap-5">
                            <p className='badge badge-accen py-4 xl:px-4 bg-[#d40473] text-black'>Grass</p>
                            <p className='badge badge-accen py-4 xl:px-4 bg-[#ffffff] text-black'>Poison</p>
                        </div>
                    </div>
                    <div className="p-2 pl-5 py-6">
                        <h2 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quos.</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;