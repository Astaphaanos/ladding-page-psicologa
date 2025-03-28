const SimpleMap = () => {
    return (
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.93469139831495!2d-36.692510207857026!3d-8.354944831234082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a831f8c3725e75%3A0x4acf33d5f4437bcb!2sCentro%20M%C3%A9dico%20Sa%C3%BAde%20e%20Bem%20Estar!5e1!3m2!1spt-PT!2sbr!4v1743191090346!5m2!1spt-PT!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  
  export default SimpleMap;