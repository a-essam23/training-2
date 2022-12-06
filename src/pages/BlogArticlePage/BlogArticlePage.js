import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogArticleHeader, Button } from "../../components";
import { Blog } from "../../context";
import { blogArticles } from "../../assets/data";
import "./BlogArticlePage.css";

export default function BlogArticlePage() {
    const ctx = useContext(Blog);
    const article = blogArticles[ctx.id - 1];

    const clickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main className="article-page">
            <BlogArticleHeader
                cat={article.cat}
                heading={article.heading}
                date={article.date}
                comments={article.comments}
            />
            <img src={`./img/${article.photo}`} alt="Article" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus fugiat
                quos qui dolorum iusto, repellat totam dolor omnis repudiandae vitae nobis ut nisi
                accusamus corrupti dolorem architecto! Eos est odit ullam sapiente in incidunt
                numquam nemo repellendus eaque suscipit! Molestiae magnam totam itaque odio
                distinctio error minus, pariatur ad tenetur quaerat reprehenderit quibusdam dolore
                placeat corporis obcaecati iusto et maxime animi nemo quam odit esse assumenda.
                Dolorem fugit neque amet, natus vero harum deleniti, impedit repellat provident
                dolor doloremque earum voluptas, eius aspernatur repudiandae veniam nam atque
                quisquam voluptatem est. Perferendis architecto, enim laudantium culpa itaque quis
                ab quasi. Aspernatur suscipit at non, unde porro, quas corporis vero distinctio
                deserunt rerum quis nulla facere quibusdam ducimus laborum magni, labore dignissimos
                exercitationem illum officia repellat ex doloribus. Modi suscipit non eius ab
                exercitationem eaque porro culpa asperiores impedit illo. Laborum placeat animi
                aliquid quis quas iure tempora quos expedita dicta! Tenetur, quod alias eaque quas
                repellat praesentium deleniti nobis illo explicabo repudiandae debitis quisquam, ad,
                earum esse provident veniam itaque quasi tempora iste error autem consectetur.
                Cumque sed quisquam tempore, praesentium nemo ipsam laudantium eius! Eaque
                blanditiis cumque esse ducimus voluptate et, ad sit quaerat doloremque unde ratione
                aperiam tempora id magnam sint quibusdam facere! Earum est, quae dolore neque
                maiores ducimus explicabo reprehenderit totam adipisci vel consectetur cumque unde
                praesentium rerum molestias impedit eius ab! Tenetur omnis voluptatum inventore quia
                atque consequatur dicta voluptas asperiores expedita, dolorum minima praesentium
                laborum animi sequi quis facere voluptates distinctio eos cupiditate ullam?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus fugiat
                quos qui dolorum iusto, repellat totam dolor omnis repudiandae vitae nobis ut nisi
                accusamus corrupti dolorem architecto! Eos est odit ullam sapiente in incidunt
                numquam nemo repellendus eaque suscipit! Molestiae magnam totam itaque odio
                distinctio error minus, pariatur ad tenetur quaerat reprehenderit quibusdam dolore
                placeat corporis obcaecati iusto et maxime animi nemo quam odit esse assumenda.
                Dolorem fugit neque amet, natus vero harum deleniti, impedit repellat provident
                dolor doloremque earum voluptas, eius aspernatur repudiandae veniam nam atque
                quisquam voluptatem est. Perferendis architecto, enim laudantium culpa itaque quis
                ab quasi. Aspernatur suscipit at non, unde porro, quas corporis vero distinctio
                deserunt rerum quis nulla facere quibusdam ducimus laborum magni, labore dignissimos
                exercitationem illum officia repellat ex doloribus. Modi suscipit non eius ab
                exercitationem eaque porro culpa asperiores impedit illo. Laborum placeat animi
                aliquid quis quas iure tempora quos expedita dicta! Tenetur, quod alias eaque quas
                repellat praesentium deleniti nobis illo explicabo repudiandae debitis quisquam, ad,
                earum esse provident veniam itaque quasi tempora iste error autem consectetur.
                Cumque sed quisquam tempore, praesentium nemo ipsam laudantium eius! Eaque
                blanditiis cumque esse ducimus voluptate et, ad sit quaerat doloremque unde ratione
                aperiam tempora id magnam sint quibusdam facere! Earum est, quae dolore neque
                maiores ducimus explicabo reprehenderit totam adipisci vel consectetur cumque unde
                praesentium rerum molestias impedit eius ab! Tenetur omnis voluptatum inventore quia
                atque consequatur dicta voluptas asperiores expedita, dolorum minima praesentium
                laborum animi sequi quis facere voluptates distinctio eos cupiditate ullam?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus fugiat
                quos qui dolorum iusto, repellat totam dolor omnis repudiandae vitae nobis ut nisi
                accusamus corrupti dolorem architecto! Eos est odit ullam sapiente in incidunt
                numquam nemo repellendus eaque suscipit! Molestiae magnam totam itaque odio
                distinctio error minus, pariatur ad tenetur quaerat reprehenderit quibusdam dolore
                placeat corporis obcaecati iusto et maxime animi nemo quam odit esse assumenda.
                Dolorem fugit neque amet, natus vero harum deleniti, impedit repellat provident
                dolor doloremque earum voluptas, eius aspernatur repudiandae veniam nam atque
                quisquam voluptatem est. Perferendis architecto, enim laudantium culpa itaque quis
                ab quasi. Aspernatur suscipit at non, unde porro, quas corporis vero distinctio
                deserunt rerum quis nulla facere quibusdam ducimus laborum magni, labore dignissimos
                exercitationem illum officia repellat ex doloribus. Modi suscipit non eius ab
                exercitationem eaque porro culpa asperiores impedit illo. Laborum placeat animi
                aliquid quis quas iure tempora quos expedita dicta! Tenetur, quod alias eaque quas
                repellat praesentium deleniti nobis illo explicabo repudiandae debitis quisquam, ad,
                earum esse provident veniam itaque quasi tempora iste error autem consectetur.
                Cumque sed quisquam tempore, praesentium nemo ipsam laudantium eius! Eaque
                blanditiis cumque esse ducimus voluptate et, ad sit quaerat doloremque unde ratione
                aperiam tempora id magnam sint quibusdam facere! Earum est, quae dolore neque
                maiores ducimus explicabo reprehenderit totam adipisci vel consectetur cumque unde
                praesentium rerum molestias impedit eius ab! Tenetur omnis voluptatum inventore quia
                atque consequatur dicta voluptas asperiores expedita, dolorum minima praesentium
                laborum animi sequi quis facere voluptates distinctio eos cupiditate ullam?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus fugiat
                quos qui dolorum iusto, repellat totam dolor omnis repudiandae vitae nobis ut nisi
                accusamus corrupti dolorem architecto! Eos est odit ullam sapiente in incidunt
                numquam nemo repellendus eaque suscipit! Molestiae magnam totam itaque odio
                distinctio error minus, pariatur ad tenetur quaerat reprehenderit quibusdam dolore
                placeat corporis obcaecati iusto et maxime animi nemo quam odit esse assumenda.
                Dolorem fugit neque amet, natus vero harum deleniti, impedit repellat provident
                dolor doloremque earum voluptas, eius aspernatur repudiandae veniam nam atque
                quisquam voluptatem est. Perferendis architecto, enim laudantium culpa itaque quis
                ab quasi. Aspernatur suscipit at non, unde porro, quas corporis vero distinctio
                deserunt rerum quis nulla facere quibusdam ducimus laborum magni, labore dignissimos
                exercitationem illum officia repellat ex doloribus. Modi suscipit non eius ab
                exercitationem eaque porro culpa asperiores impedit illo. Laborum placeat animi
                aliquid quis quas iure tempora quos expedita dicta! Tenetur, quod alias eaque quas
                repellat praesentium deleniti nobis illo explicabo repudiandae debitis quisquam, ad,
                earum esse provident veniam itaque quasi tempora iste error autem consectetur.
                Cumque sed quisquam tempore, praesentium nemo ipsam laudantium eius! Eaque
                blanditiis cumque esse ducimus voluptate et, ad sit quaerat doloremque unde ratione
                aperiam tempora id magnam sint quibusdam facere! Earum est, quae dolore neque
                maiores ducimus explicabo reprehenderit totam adipisci vel consectetur cumque unde
                praesentium rerum molestias impedit eius ab! Tenetur omnis voluptatum inventore quia
                atque consequatur dicta voluptas asperiores expedita, dolorum minima praesentium
                laborum animi sequi quis facere voluptates distinctio eos cupiditate ullam?
            </p>
            <Link to="/" className="backToHome" onClick={clickHandler}>
                <Button kind={"primary"}>Go Back</Button>
            </Link>
        </main>
    );
}
