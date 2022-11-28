import { BlogArticleHeader, Button } from "../../components";
import { MainLayout } from "../../layouts";
import "./BlogArticlePage.css";
import { Navigate, useParams } from "react-router-dom";
import { useBlogs } from "../../context/BlogProvider";

export default function BlogArticlePage({ articleID, onExit }) {
    const { blogId } = useParams();
    const { getBlog } = useBlogs();
    const blog = getBlog(blogId);
    if (!blog) return <Navigate to="/" replace />;
    const clickHandler = () => {
        onExit();
    };
    return (
        <MainLayout>
            <main className="article-page" key={blog.id}>
                <BlogArticleHeader
                    cat={blog.cat}
                    heading={blog.heading}
                    date={blog.date}
                    comments={blog.comments}
                />
                <img src={`./img/${blog.photo}`} alt="Article" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore doloribus fugiat quos qui dolorum iusto, repellat
                    totam dolor omnis repudiandae vitae nobis ut nisi accusamus
                    corrupti dolorem architecto! Eos est odit ullam sapiente in
                    incidunt numquam nemo repellendus eaque suscipit! Molestiae
                    magnam totam itaque odio distinctio error minus, pariatur ad
                    tenetur quaerat reprehenderit quibusdam dolore placeat
                    corporis obcaecati iusto et maxime animi nemo quam odit esse
                    assumenda. Dolorem fugit neque amet, natus vero harum
                    deleniti, impedit repellat provident dolor doloremque earum
                    voluptas, eius aspernatur repudiandae veniam nam atque
                    quisquam voluptatem est. Perferendis architecto, enim
                    laudantium culpa itaque quis ab quasi. Aspernatur suscipit
                    at non, unde porro, quas corporis vero distinctio deserunt
                    rerum quis nulla facere quibusdam ducimus laborum magni,
                    labore dignissimos exercitationem illum officia repellat ex
                    doloribus. Modi suscipit non eius ab exercitationem eaque
                    porro culpa asperiores impedit illo. Laborum placeat animi
                    aliquid quis quas iure tempora quos expedita dicta! Tenetur,
                    quod alias eaque quas repellat praesentium deleniti nobis
                    illo explicabo repudiandae debitis quisquam, ad, earum esse
                    provident veniam itaque quasi tempora iste error autem
                    consectetur. Cumque sed quisquam tempore, praesentium nemo
                    ipsam laudantium eius! Eaque blanditiis cumque esse ducimus
                    voluptate et, ad sit quaerat doloremque unde ratione aperiam
                    tempora id magnam sint quibusdam facere! Earum est, quae
                    dolore neque maiores ducimus explicabo reprehenderit totam
                    adipisci vel consectetur cumque unde praesentium rerum
                    molestias impedit eius ab! Tenetur omnis voluptatum
                    inventore quia atque consequatur dicta voluptas asperiores
                    expedita, dolorum minima praesentium laborum animi sequi
                    quis facere voluptates distinctio eos cupiditate ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore doloribus fugiat quos qui dolorum iusto, repellat
                    totam dolor omnis repudiandae vitae nobis ut nisi accusamus
                    corrupti dolorem architecto! Eos est odit ullam sapiente in
                    incidunt numquam nemo repellendus eaque suscipit! Molestiae
                    magnam totam itaque odio distinctio error minus, pariatur ad
                    tenetur quaerat reprehenderit quibusdam dolore placeat
                    corporis obcaecati iusto et maxime animi nemo quam odit esse
                    assumenda. Dolorem fugit neque amet, natus vero harum
                    deleniti, impedit repellat provident dolor doloremque earum
                    voluptas, eius aspernatur repudiandae veniam nam atque
                    quisquam voluptatem est. Perferendis architecto, enim
                    laudantium culpa itaque quis ab quasi. Aspernatur suscipit
                    at non, unde porro, quas corporis vero distinctio deserunt
                    rerum quis nulla facere quibusdam ducimus laborum magni,
                    labore dignissimos exercitationem illum officia repellat ex
                    doloribus. Modi suscipit non eius ab exercitationem eaque
                    porro culpa asperiores impedit illo. Laborum placeat animi
                    aliquid quis quas iure tempora quos expedita dicta! Tenetur,
                    quod alias eaque quas repellat praesentium deleniti nobis
                    illo explicabo repudiandae debitis quisquam, ad, earum esse
                    provident veniam itaque quasi tempora iste error autem
                    consectetur. Cumque sed quisquam tempore, praesentium nemo
                    ipsam laudantium eius! Eaque blanditiis cumque esse ducimus
                    voluptate et, ad sit quaerat doloremque unde ratione aperiam
                    tempora id magnam sint quibusdam facere! Earum est, quae
                    dolore neque maiores ducimus explicabo reprehenderit totam
                    adipisci vel consectetur cumque unde praesentium rerum
                    molestias impedit eius ab! Tenetur omnis voluptatum
                    inventore quia atque consequatur dicta voluptas asperiores
                    expedita, dolorum minima praesentium laborum animi sequi
                    quis facere voluptates distinctio eos cupiditate ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore doloribus fugiat quos qui dolorum iusto, repellat
                    totam dolor omnis repudiandae vitae nobis ut nisi accusamus
                    corrupti dolorem architecto! Eos est odit ullam sapiente in
                    incidunt numquam nemo repellendus eaque suscipit! Molestiae
                    magnam totam itaque odio distinctio error minus, pariatur ad
                    tenetur quaerat reprehenderit quibusdam dolore placeat
                    corporis obcaecati iusto et maxime animi nemo quam odit esse
                    assumenda. Dolorem fugit neque amet, natus vero harum
                    deleniti, impedit repellat provident dolor doloremque earum
                    voluptas, eius aspernatur repudiandae veniam nam atque
                    quisquam voluptatem est. Perferendis architecto, enim
                    laudantium culpa itaque quis ab quasi. Aspernatur suscipit
                    at non, unde porro, quas corporis vero distinctio deserunt
                    rerum quis nulla facere quibusdam ducimus laborum magni,
                    labore dignissimos exercitationem illum officia repellat ex
                    doloribus. Modi suscipit non eius ab exercitationem eaque
                    porro culpa asperiores impedit illo. Laborum placeat animi
                    aliquid quis quas iure tempora quos expedita dicta! Tenetur,
                    quod alias eaque quas repellat praesentium deleniti nobis
                    illo explicabo repudiandae debitis quisquam, ad, earum esse
                    provident veniam itaque quasi tempora iste error autem
                    consectetur. Cumque sed quisquam tempore, praesentium nemo
                    ipsam laudantium eius! Eaque blanditiis cumque esse ducimus
                    voluptate et, ad sit quaerat doloremque unde ratione aperiam
                    tempora id magnam sint quibusdam facere! Earum est, quae
                    dolore neque maiores ducimus explicabo reprehenderit totam
                    adipisci vel consectetur cumque unde praesentium rerum
                    molestias impedit eius ab! Tenetur omnis voluptatum
                    inventore quia atque consequatur dicta voluptas asperiores
                    expedita, dolorum minima praesentium laborum animi sequi
                    quis facere voluptates distinctio eos cupiditate ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore doloribus fugiat quos qui dolorum iusto, repellat
                    totam dolor omnis repudiandae vitae nobis ut nisi accusamus
                    corrupti dolorem architecto! Eos est odit ullam sapiente in
                    incidunt numquam nemo repellendus eaque suscipit! Molestiae
                    magnam totam itaque odio distinctio error minus, pariatur ad
                    tenetur quaerat reprehenderit quibusdam dolore placeat
                    corporis obcaecati iusto et maxime animi nemo quam odit esse
                    assumenda. Dolorem fugit neque amet, natus vero harum
                    deleniti, impedit repellat provident dolor doloremque earum
                    voluptas, eius aspernatur repudiandae veniam nam atque
                    quisquam voluptatem est. Perferendis architecto, enim
                    laudantium culpa itaque quis ab quasi. Aspernatur suscipit
                    at non, unde porro, quas corporis vero distinctio deserunt
                    rerum quis nulla facere quibusdam ducimus laborum magni,
                    labore dignissimos exercitationem illum officia repellat ex
                    doloribus. Modi suscipit non eius ab exercitationem eaque
                    porro culpa asperiores impedit illo. Laborum placeat animi
                    aliquid quis quas iure tempora quos expedita dicta! Tenetur,
                    quod alias eaque quas repellat praesentium deleniti nobis
                    illo explicabo repudiandae debitis quisquam, ad, earum esse
                    provident veniam itaque quasi tempora iste error autem
                    consectetur. Cumque sed quisquam tempore, praesentium nemo
                    ipsam laudantium eius! Eaque blanditiis cumque esse ducimus
                    voluptate et, ad sit quaerat doloremque unde ratione aperiam
                    tempora id magnam sint quibusdam facere! Earum est, quae
                    dolore neque maiores ducimus explicabo reprehenderit totam
                    adipisci vel consectetur cumque unde praesentium rerum
                    molestias impedit eius ab! Tenetur omnis voluptatum
                    inventore quia atque consequatur dicta voluptas asperiores
                    expedita, dolorum minima praesentium laborum animi sequi
                    quis facere voluptates distinctio eos cupiditate ullam?
                </p>
                <a href="#" className="backToHome" onClick={clickHandler}>
                    <Button kind={"primary"}>Go Back</Button>
                </a>
            </main>
        </MainLayout>
    );
}
