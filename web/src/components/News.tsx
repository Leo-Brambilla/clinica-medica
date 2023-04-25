import { Typography } from '@mui/material';

const News = () => {
    return (

        <div className="bg-gray-100 p-8">
            <div className='flex items-center justify-center'>  
                <Typography variant="h4" className="mb-4">News</Typography>
            </div>
            <div className="flex flex-wrap gap-8 items-center justify-center">
                <div className="w-full md:w-1/2">
                    <img src="https://images.pexels.com/photos/7089619/pexels-photo-7089619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Notícia 1" className="w-full h-auto" />
                    <Typography variant="h6" className="mt-4 mb-2">Nova tecnologia para diagnóstico</Typography>
                    <Typography variant="body1" className="text-gray-700">
                        A Clínica Med One acaba de adquirir um novo equipamento para diagnóstico de doenças, que utiliza tecnologia de ponta e oferece resultados precisos e rápidos. Agora, os pacientes podem contar com ainda mais qualidade no atendimento e diagnóstico precoce de doenças.
                    </Typography>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="https://images.pexels.com/photos/8460221/pexels-photo-8460221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Notícia 2" className="w-full h-auto" />
                    <Typography variant="h6" className="mt-4 mb-2">Novo médico cardiologista na equipe</Typography>
                    <Typography variant="body1" className="text-gray-700">
                        A Clínica Med One tem o prazer de anunciar a chegada do Dr. José Silva, especialista em cardiologia, para integrar nossa equipe de profissionais. Com ampla experiência na área, o Dr. José vem somar ainda mais qualidade e excelência ao atendimento da clínica.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default News;
