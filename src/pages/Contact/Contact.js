import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { motion } from "framer-motion"
import '../Home/home.scss'


const divStyle = {
  position: 'absolute',
  top: 0,
  left: 0
};

export const Contact = () => {

  const schema = yup.object({
    Name: yup.string().required(),
    Question: yup.string().required(),
    Email: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

    return (
        <motion.main
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={divStyle}
        >
        <>
        <div className="home-page">
        <div className="home-page__background-decoration" />

        <div className="home-page__container">
          <div className="container">
              <div className="home-page__left">
              <h1>Contact Us</h1>

              <span>If you have question - don't hesitate and send us your request!</span>
          </div>

          <div className="home-page__right">
              <form onSubmit={handleSubmit(onSubmit)}>

              <label for="firstName">Name</label>
              <input {...register("Name")} id="firstName"/>
              <p>{errors.Name?.message}</p>
            

              <label for="email">Email</label>
              <input {...register("Email")} id="email" />
              <p>{errors.email?.message}</p>
                

              <label for="question">Question</label>
              <textarea {...register("Question")} id="question" />
              <p>{errors.question?.message}</p>
              
              <input type="submit" />
            </form>
          </div>
          </div>
        </div>
        </div>
     
        </>
        </motion.main>
    );
}