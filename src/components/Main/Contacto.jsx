import { useForm } from "react-hook-form"

const Contacto = () => {

    const { register, handleSubmit, reset } = useForm()

    const enviar = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className="container-contacto">

            <h1 className="title-contacto">Contacto</h1>

            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <textarea className="text-area" placeholder="Dejanos tu comentario" {...register("mensaje")}></textarea>

                <button className="button-contacto" type="submit">Enviar</button>

            </form>

        </div>
    )
}

export default Contacto
