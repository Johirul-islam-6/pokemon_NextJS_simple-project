import Image from 'next/image';
import Card from '../components/Singel_Pokemon/Card';

const Posts = ({ posts }) => {

    return (
        <>
            <div className=''>
                <h1 className='text-5xl text-center pb-20'>POKEMON</h1>
                <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 px-10 ">
                    {
                        posts?.map(post => <Card post={post}></Card>)
                    }
                </div>
            </div>
            {/* ----------Univers responsive ------------------ */}

            <h1 className='text-3xl text-center py-20'>POKEMON UNIVERS</h1>

            <div className="div px-10 hidden md:block">
                <div className="grid grid-cols-2 gap-4">

                    <div className="">
                        <div className="flex w-[100%]">
                            <div className="block w-[75%]">
                                <div className="">
                                    <p>Lorem ipsum doloremque error incidunt, modi quia facilis ipsa delectus nobis labore velit ducimus? Aspernatur sed nobis vel consequatur corporis laborum ea hic repudiandae, cum, porro ipsa qui obcaecati numquam quidem nisi, repellendus illo accusantium explicabo culpa molestias soluta vitae veritatis nesciunt. Beatae error aut minima perspiciatis provident quas inventore animi iste. </p>
                                </div>
                                {/* ---------center div------- */}
                                <div className="mr-8 py-2">
                                    <div className="flex w-[100%]">
                                        <div className="w-[75%]">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente tempore nobis ullam quos et labore? Est tenetur accusamus magnam ratione unde dolores dolore maiores modi velit eum sequi consequuntur ipsum eveniet, temporibus dignissimos quisquam inventore facilis nemo commodi ex?</p>
                                        </div>
                                        <Image className='pokemonImage w-[25%]' src='/cartun.webp' alt="image" width={100} height={60}></Image>
                                    </div>
                                </div>
                                <div className="">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut sed deleniti provident consequatur quas debitis omnis magnam recusandae nulla a, at tenetur aliquid odio libero eaque adipisci. Ea et recusandae sint ipsa exercitationem molestiae eum laboriosam quas ducimus aspernatur?</p>
                                </div>
                            </div>


                            <div className="block w-[25%] ">
                                <Image className='pokemonImage ' src='/pokki.jpg' alt="image" width={200} height={200}></Image>
                                <Image className='pokemonImage my-5 mt-[50px]' src='/pokki.jpg' alt="image" width={200} height={200}></Image>
                            </div>
                        </div>
                        <p className='mt-5'>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem, dolorum, distinctio sed illum perspiciatis at ipsa ut autem iste saepe. Praesentium architecto esse iure similique ullam soluta, excepturi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quasi dolorum quae voluptatibus perspiciatis asperiores hic, atque modi deserunt!.</p>
                        {/* ==========CENTER IMAGE =========== */}


                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium, libero rem odit eveniet et hic voluptatibus dolorem incidunt ratione voluptates excepturi eum, sapiente accusamus aliquam? Officiis ipsa, repellat quisquam ducimus similique illo nam officia temporibus tenetur. Eius laborum eveniet enim, dolore quasi atque? Unde pariatur debitis veniam numquam? Rem!
                        <div className="flex w-[100%] pt-5">
                            <Image className='pokemonImage w-[25%]' src='/ppp.jpg' alt="image" width={200} height={200}></Image>
                            <h1 className='w-[75%] pl-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel quae dolores. Soluta reiciendis incidunt natus rem culpa! Rerum, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel quae dolores. Soluta reiciendis incidunt natus rem culpa! Rerum, quas.</h1>
                        </div>
                        <div className="flex w-[100%] pt-5">
                            <Image className='pokemonImage w-[25%]' src='/ppp.jpg' alt="image" width={200} height={200}></Image>
                            <h1 className='w-[75%] pl-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel quae dolores. Soluta reiciendis incidunt natus rem culpa! Rerum, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel quae dolores. Soluta reiciendis incidunt natus rem culpa! Rerum, quas.</h1>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam dolorum cumque nesciunt voluptatibus est facilis? Aperiam numquam praesentium enim odit! Beatae illum impedit provident? Aspernatur quod minima pariatur molestiae sapiente perspiciatis, reprehenderit delectus accusantium illum sint repellendus distinctio, amet consectetur numquam explicabo. Quis quia voluptate eius nulla, consequuntur quod, corporis nesciunt ullam fugit cupiditate quos pariatur voluptas, omnis quasi.</p>
                    </div>
                </div>
            </div>

            <div className="block md:hidden mx-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, magnam maiores aliquid consequatur commodi amet voluptatum dolores nulla ea qui illo ducimus laborum! Quidem quasi, cum fuga debitis aperiam laboriosam libero, error consequatur at beatae laudantium! Nam repellendus fuga sed dolores iste nihil, ducimus totam pariatur asperiores similique saepe? Modi ea, quam magnam quasi voluptatum excepturi dolore minima accusantium porro ratione, ad qui exercitationem consequatur officia fugit! Quidem deserunt numquam quod vero dolor laboriosam dolorem, quis suscipit fugiat. Exercitationem voluptatibus unde aspernatur provident dolorum sed officia itaque ipsa quod quo.</p>


                <div className="flex justify-center my-5">
                    <Image className='pokemonImage' src='/cartun.webp' alt="image" width={120} height={200}></Image>
                    <Image className='pokemonImage' src='/cartun.webp' alt="image" width={120} height={200}></Image>
                    <Image className='pokemonImage' src='/cartun.webp' alt="image" width={120} height={200}></Image>
                </div>



                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, magnam maiores aliquid consequatur commodi amet voluptatum dolores nulla ea qui illo ducimus laborum! Quidem quasi, cum fuga debitis aperiam laboriosam libero, error consequatur at beatae laudantium! Nam repellendus fuga sed dolores iste nihil, ducimus totam pariatur asperiores similique saepe? Modi ea, quam magnam quasi voluptatum excepturi dolore minima accusantium porro ratione, ad qui exercitationem consequatur officia fugit! Quidem deserunt numquam quod vero dolor laboriosam dolorem, quis suscipit fugiat. Exercitationem voluptatibus unde aspernatur provident dolorum sed officia itaque ipsa quod quo.</p>
            </div>



        </>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}