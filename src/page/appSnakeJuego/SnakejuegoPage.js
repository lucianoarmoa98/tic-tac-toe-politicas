import '../../App.css';

function SnakejuegoPage() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1 style={{color: '#2c3e50', textAlign: 'center'}}>Política de Privacidad y Términos de Uso</h1>
      <h2 style={{color: '#27ae60', textAlign: 'center'}}>Classic Snake Retro</h2>
      <p style={{textAlign: 'center', fontStyle: 'italic'}}>Última actualización: 8 de octubre de 2025</p>
      
      <div style={{backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Classic Snake Retro</strong> es un juego gratuito que respeta tu privacidad. Esta política describe cómo manejamos la información cuando juegas nuestro juego clásico de serpiente.</p>
      </div>

      <h2 style={{color: '#34495e'}}>1. Información que Recopilamos</h2>
      <ul>
        <li><strong>Datos Locales:</strong> Tu puntuación más alta se guarda únicamente en tu dispositivo local</li>
        <li><strong>Sin Registro:</strong> No requiere creación de cuenta ni información personal</li>
        <li><strong>Sin Conectividad:</strong> El juego funciona completamente offline</li>
        <li><strong>Sin Cookies:</strong> No utilizamos cookies de seguimiento</li>
      </ul>

      <h2 style={{color: '#34495e'}}>2. Cómo Usamos la Información</h2>
      <ul>
        <li>Las puntuaciones se almacenan localmente para mostrar tu récord personal</li>
        <li>No compartimos, vendemos ni transmitimos ninguna información a terceros</li>
        <li>No enviamos datos a servidores externos</li>
        <li>No realizamos análisis de comportamiento del usuario</li>
      </ul>

      <h2 style={{color: '#34495e'}}>3. Términos de Uso del Juego</h2>
      <ul>
        <li><strong>Uso Gratuito:</strong> Classic Snake Retro es completamente gratuito para uso personal</li>
        <li><strong>Sin Publicidad:</strong> Disfruta de una experiencia de juego sin interrupciones publicitarias</li>
        <li><strong>Sin Compras:</strong> No hay microtransacciones ni contenido premium</li>
        <li><strong>Fair Play:</strong> Juega limpio y disfruta de la experiencia retro auténtica</li>
      </ul>

      <h2 style={{color: '#34495e'}}>4. Controles del Juego</h2>
      <ul>
        <li><strong>Teclado:</strong> Usa las teclas de flecha para controlar la serpiente</li>
        <li><strong>Pausa:</strong> Presiona espacio para pausar el juego</li>
        <li><strong>Reinicio:</strong> Presiona 'R' para reiniciar una nueva partida</li>
        <li><strong>Responsive:</strong> Compatible con dispositivos móviles y de escritorio</li>
      </ul>

      <h2 style={{color: '#34495e'}}>5. Seguridad y Privacidad</h2>
      <ul>
        <li>No solicitamos permisos innecesarios en tu dispositivo</li>
        <li>Tu información permanece en tu dispositivo en todo momento</li>
        <li>No accedemos a tu cámara, micrófono, ubicación o contactos</li>
        <li>El código es de código abierto y auditable</li>
      </ul>

      <h2 style={{color: '#34495e'}}>6. Limitación de Responsabilidad</h2>
      <ul>
        <li>Classic Snake Retro se proporciona "tal como está" sin garantías</li>
        <li>No nos responsabilizamos por la pérdida de puntuaciones debido a problemas técnicos</li>
        <li>El juego es para entretenimiento y no tiene valor monetario</li>
        <li>Recomendamos tomar descansos para evitar fatiga visual</li>
      </ul>

      <h2 style={{color: '#34495e'}}>7. Actualizaciones y Modificaciones</h2>
      <ul>
        <li>Podemos actualizar el juego para mejorar la experiencia</li>
        <li>Las actualizaciones no afectarán tus puntuaciones guardadas</li>
        <li>Nos reservamos el derecho de modificar estos términos</li>
        <li>Los cambios importantes serán notificados en esta página</li>
      </ul>

      <h2 style={{color: '#34495e'}}>8. Contacto</h2>
      <div style={{backgroundColor: '#e8f4f8', padding: '15px', borderRadius: '8px'}}>
        <p>Si tienes preguntas sobre esta política o sobre Classic Snake Retro, contáctanos:</p>
        <ul>
          <li><strong>Email:</strong> incentivagroups@gmail.com</li>
          <li><strong>GitHub:</strong> Reporta bugs en nuestro repositorio</li>
          <li><strong>Versión:</strong> 1.0.0</li>
        </ul>
      </div>

      <div style={{textAlign: 'center', marginTop: '30px', padding: '20px', backgroundColor: '#2c3e50', color: 'white', borderRadius: '8px'}}>
        <h3>¡Disfruta jugando Classic Snake Retro!</h3>
        <p>Un juego clásico reimaginado con respeto por tu privacidad</p>
      </div>
    </div>
  );
}

export default SnakejuegoPage;