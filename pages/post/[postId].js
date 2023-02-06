import Image from "next/image";
import { useRouter } from "next/router";

const pokemonDetails
    = ({ post }) => {

        const rounter = useRouter();

        const BackHome = () => {
            rounter.push(`/post`)
        }

        return (
            <>
                <div className="w-[100%] justify-center align-middle items-center px-10">
                    <div className="grid md:grid-cols-3 mt-20">
                        <div className="div">
                            <h1 className="text-blue-600 text-5xl">Bulbasaur #100
                            </h1>
                            <p className="py-10 text-2xl">There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                            {/* ------card------- */}

                            <div className="cetagory_card mb-5 lg:card-side bg-[#cdcccc] shadow-xl text-black px-8">
                                <div className="flex justify-between  md:gap-5 w-full">
                                    <div className="div">
                                        <h1 className="font-bold"> Height</h1>
                                        <br />
                                        2"04"
                                        <br />
                                        <br />
                                        <h1 className="font-bold">weight</h1>
                                        <br />
                                        15.2 lbs
                                    </div>
                                    <div className="div">
                                        <h1 className="font-bold">Category</h1>
                                        <br />
                                        seed
                                        <br />
                                        <br />
                                        <h1 className="font-bold">Abilities</h1>
                                        <br />
                                        Overgrow
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* 2rd col ========== */}
                        <div className="">
                            <figure className="px-10 pt-10">
                                {/* <Image src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                                <Image className='pokemonImage' src='/pokemon.png' alt="image" width={500} height={500}></Image>
                            </figure>
                            <h1 className="text-center text-red-600 text-3xl mt-10 pl-10">Name JxtS</h1>
                        </div>

                        {/* 3rd col ========== */}
                        <div className="block justify-center">
                            <div className="block">
                                <h1 className="text-1xl text-white font-bold py-3">Type : </h1>
                                <div className="flex">
                                    <button className="btn btn-warning">Grass</button>
                                    <button className="btn btn-error mx-5">Poison</button>

                                </div>
                            </div>
                            <div className="block mt-20">
                                <h1 className="text-1xl text-white font-bold py-3">Weaknesses : </h1>
                                <div className="flex">
                                    <button className="btn btn-primary">Fire</button>
                                    <button className="btn btn-error mx-5">Psychic</button>
                                    <button className="btn btn-info">Flying</button>
                                    <button className="btn btn-outline mx-5">Ice</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20 pb-20">
                    <h1 onClick={BackHome} className="btn btn-primary px-44">Back to Home</h1>
                </div>
            </>
        );
    };

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data?.map(post => {
        return {
            params: {
                postId: `${post?.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default pokemonDetails
    ;
