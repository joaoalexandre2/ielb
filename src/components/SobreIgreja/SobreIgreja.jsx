import IELBImage from '../../assets/ielb.jpeg'; // Importe a imagem da igreja

const SobreIgreja = () => {
  return (
    <div className="container mx-auto my-10 px-5 ">

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 mx-auto md:mx-0 md:pr-10">
          <img src={IELBImage} alt="IELB" className="rounded-lg shadow-lg w-full h-auto md:h-475 object-cover mx-auto mt-[-100px]" />
        </div>
        <div className="espacamento"></div>
        <div className="w-full md:w-3/5 md:pl-10">
       
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          
          
            História <br />
            e Atividades da Igreja <br /> Evangélica Luterana <br /> do Brasil</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            A Igreja Luterana tem sua origem no movimento da Reforma iniciado em 1517 com Martinho Lutero, monge alemão que desejava promover uma reforma na Igreja Cristã da época, através de uma volta à Bíblia e de debates teológicos públicos, para se corrigirem os rumos da Igreja. Não foi ouvido em suas propostas, mas ganhou muitos seguidores, que foram chamados de protestantes e mais tarde de luteranos. No dia 31 de outubro comemoramos o dia da Reforma, lembrando especialmente as três grandes doutrinas defendidas por Lutero: Sola Gratia, Sola Fide, Sola Scriptura (somente pela graça, somente pela fé, somente pela Escritura – a Palavra de Deus).
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            A Igreja Luterana, com esta mensagem do Evangelho salvador, espalhou-se com a Reforma por toda a Europa e também veio para os Estados Unidos com os imigrantes alemães no século XIX.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            No início do século XX, a pedido do pastor Johann F. Brutschin, de Novo Hamburgo, RS, a Igreja Luterana - Sínodo de Missouri, dos Estados Unidos, enviou ao Brasil o pastor Christian J. Broders. Este fundou, no dia 1º de junho de 1900, com 17 famílias, a Comunidade Evangélica Luterana São João, em São Pedro, a 40 km de Pelotas, RS.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Em 24 de junho de 1904 foi fundada, em São Pedro do Sul, perto de Santa Maria, RS, com a presença de 14 pastores, um professor e 10 leigos, representando 10 comunidades com aproximadamente três mil membros, a Igreja Evangélica Luterana do Brasil.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Hoje a IELB está presente em todo o Brasil e conta com mais de 900 pastores e aproximadamente 245 mil membros. Tem pastores missionários também na Europa, Américas e África. No trabalho missionário conta com o apoio da Hora Luterana - A Voz da Cruz, que produz programas de rádio, material de aconselhamento e cursos bíblicos impressos e na internet (<a href="http://www.horaluterana.org.br">www.horaluterana.org.br</a>; <a href="http://www.deusconecta.org">www.deusconecta.org</a>; <a href="http://www.vivenciar.net">www.vivenciar.net</a>).
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SobreIgreja;
