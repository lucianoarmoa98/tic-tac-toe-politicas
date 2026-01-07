import '../../App.css';

function VaoPuePoliticasPage() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h1 style={{color: '#2563eb', fontSize: '2.5rem', marginBottom: '10px'}}>Política de Privacidad y Términos de Uso</h1>
        <h2 style={{color: '#059669', fontSize: '1.8rem', marginBottom: '10px'}}>Vao Pue</h2>
        <p style={{fontStyle: 'italic', color: '#6b7280'}}>Última actualización: 7 de enero de 2026</p>
      </div>

      <div style={{backgroundColor: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #dbeafe', marginBottom: '30px'}}>
        <p><strong>Vao Pue</strong> es una aplicación móvil que conecta a usuarios con restaurantes y establecimientos de comida, permitiendo visualizar menús digitales y realizar pedidos en línea. Esta política describe cómo recopilamos, usamos y protegemos su información personal de acuerdo con las regulaciones internacionales de privacidad.</p>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>1. Información que Recopilamos</h2>
      <div style={{marginBottom: '25px'}}>
        <h3 style={{color: '#374151'}}>1.1 Información Personal</h3>
        <ul>
          <li><strong>Datos de Cuenta:</strong> Nombre completo, email, número de teléfono</li>
          <li><strong>Información de Entrega:</strong> Direcciones de entrega, preferencias alimentarias, alergias</li>
          <li><strong>Datos de Pago:</strong> Información de tarjetas de crédito/débito, métodos de pago preferidos</li>
          <li><strong>Historial de Pedidos:</strong> Restaurantes favoritos, platos preferidos, frecuencia de pedidos</li>
        </ul>
        
        <h3 style={{color: '#374151'}}>1.2 Información Técnica</h3>
        <ul>
          <li>Dirección IP, tipo de dispositivo, sistema operativo</li>
          <li>Información de ubicación GPS (para determinar restaurantes cercanos)</li>
          <li>Registros de navegación por menús y búsquedas de comida</li>
          <li>Cookies de sesión y preferencias de la aplicación</li>
        </ul>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>2. Cómo Usamos su Información</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Gestión de Pedidos:</strong> Procesar y confirmar pedidos de comida</li>
        <li><strong>Comunicación:</strong> Enviar confirmaciones, actualizaciones de estado del pedido y notificaciones</li>
        <li><strong>Personalización:</strong> Recomendar restaurantes y platos según sus preferencias</li>
        <li><strong>Entrega:</strong> Coordinar la entrega de pedidos en la ubicación especificada</li>
        <li><strong>Seguridad:</strong> Prevenir fraude y garantizar transacciones seguras</li>
        <li><strong>Soporte:</strong> Brindar asistencia técnica y resolver problemas con pedidos</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>3. Gestión de Cuentas</h2>
      <div style={{backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', border: '1px solid #fbbf24', marginBottom: '25px'}}>
        <h3 style={{color: '#92400e', margin: '0 0 10px 0'}}>Registro y Administración de Cuenta</h3>
        <ul style={{margin: 0}}>
          <li><strong>Creación:</strong> Los usuarios pueden crear cuentas directamente en la aplicación</li>
          <li><strong>Verificación:</strong> Verificamos números de teléfono para mayor seguridad</li>
          <li><strong>Gestión:</strong> Tienes control total sobre tu perfil y preferencias</li>
          <li><strong>Eliminación:</strong> Puedes eliminar tu cuenta y datos en cualquier momento</li>
        </ul>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>4. Sus Derechos de Privacidad</h2>
      <div style={{backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '8px', border: '1px solid #16a34a', marginBottom: '25px'}}>
        <h3 style={{color: '#15803d', margin: '0 0 10px 0'}}>Derechos del Usuario</h3>
        <ul style={{margin: 0}}>
          <li><strong>Acceso:</strong> Consultar toda la información que tenemos sobre usted</li>
          <li><strong>Rectificación:</strong> Corregir datos incorrectos o desactualizados</li>
          <li><strong>Eliminación:</strong> Solicitar la eliminación completa de su cuenta y datos</li>
          <li><strong>Portabilidad:</strong> Obtener copia de sus datos en formato estructurado</li>
          <li><strong>Oposición:</strong> Objetar ciertos usos de sus datos personales</li>
          <li><strong>Limitación:</strong> Restringir el procesamiento en ciertas circunstancias</li>
        </ul>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>5. Compartir Información</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Restaurantes Asociados:</strong> Información de pedidos necesaria para preparación y entrega</li>
        <li><strong>Servicios de Entrega:</strong> Datos de contacto y dirección para entrega de pedidos</li>
        <li><strong>Procesadores de Pago:</strong> Para transacciones seguras (datos encriptados)</li>
        <li><strong>Requerimientos Legales:</strong> Cuando sea obligatorio por ley</li>
        <li><strong>Soporte Técnico:</strong> Para resolver problemas con pedidos específicos</li>
        <li><strong>NO vendemos</strong> ni compartimos datos con terceros para marketing</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>6. Seguridad y Protección de Datos</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Encriptación:</strong> Todos los datos sensibles están encriptados (SSL/TLS)</li>
        <li><strong>Acceso Limitado:</strong> Solo personal autorizado puede acceder a datos personales</li>
        <li><strong>Monitoreo:</strong> Sistemas de detección de intrusiones 24/7</li>
        <li><strong>Backups Seguros:</strong> Copias de seguridad encriptadas en ubicaciones seguras</li>
        <li><strong>Certificaciones:</strong> Cumplimos con estándares internacionales de seguridad</li>
        <li><strong>Auditorías:</strong> Revisiones regulares de seguridad por terceros independientes</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>7. Retención de Datos</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Datos de Cuenta:</strong> Durante la vida útil de la cuenta activa</li>
        <li><strong>Historial de Pedidos:</strong> 3 años para soporte al cliente y análisis</li>
        <li><strong>Datos de Pago:</strong> Según regulaciones de la industria de pagos</li>
        <li><strong>Logs Técnicos:</strong> 1 año para seguridad y mejoras del servicio</li>
        <li><strong>Eliminación:</strong> Datos eliminados permanentemente tras el período de retención</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>8. Cookies y Tecnologías de Seguimiento</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico</li>
        <li><strong>Cookies de Preferencia:</strong> Guardan configuraciones del usuario</li>
        <li><strong>Analytics:</strong> Mejoran la experiencia (pueden desactivarse)</li>
        <li><strong>Control:</strong> Puede gestionar cookies desde configuración de la app</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>9. Transferencias Internacionales</h2>
      <ul style={{marginBottom: '25px'}}>
        <li>Los datos pueden transferirse a países con adecuada protección de datos</li>
        <li>Utilizamos cláusulas contractuales estándar para protección adicional</li>
        <li>Cumplimos con GDPR, CCPA y regulaciones locales aplicables</li>
        <li>Los proveedores internacionales están certificados en protección de datos</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>10. Menores de Edad</h2>
      <div style={{backgroundColor: '#fef2f2', padding: '15px', borderRadius: '8px', border: '1px solid #f87171', marginBottom: '25px'}}>
        <p style={{margin: 0}}><strong>Vao Pue no está dirigida a menores de 13 años.</strong> Los menores entre 13 y 18 años requieren supervisión parental para realizar pedidos. Si descubrimos datos de menores sin consentimiento apropiado, eliminaremos esa información inmediatamente.</p>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>11. Cambios en la Política</h2>
      <ul style={{marginBottom: '25px'}}>
        <li>Notificaremos cambios materiales con 30 días de anticipación</li>
        <li>Los cambios se publicarán en la app y sitio web</li>
        <li>Su uso continuado constituye aceptación de cambios</li>
        <li>Mantenemos un historial de versiones anteriores disponible</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>12. Contacto y Ejercicio de Derechos</h2>
      <div style={{backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #cbd5e1'}}>
        <h3 style={{color: '#475569', marginTop: 0}}>Para ejercer sus derechos o consultas sobre privacidad:</h3>
        <ul style={{marginBottom: '15px'}}>
          <li><strong>Email de Privacidad:</strong> privacy@vaopue.com</li>
          <li><strong>Soporte General:</strong> support@vaopue.com</li>
          <li><strong>Teléfono:</strong> +57 (1) 800-VAO-PUE</li>
          <li><strong>Dirección:</strong> Vao Pue Privacy Office, Calle de los Sabores 123, Bogotá, Paraguay</li>
        </ul>
        
        <h3 style={{color: '#475569'}}>Eliminar Cuenta:</h3>
        <p style={{backgroundColor: '#e11d48', color: 'white', padding: '10px', borderRadius: '6px', margin: '10px 0'}}>
          <strong>Para eliminar permanentemente su cuenta:</strong> Envíe un email a delete@vaopue.com desde su email registrado con el asunto "Eliminación de Cuenta". Procesaremos su solicitud en un plazo máximo de 30 días.
        </p>
        
        <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: 0}}>
          <strong>Tiempo de respuesta:</strong> Responderemos a todas las consultas de privacidad dentro de 72 horas. Para ejercicio de derechos, el plazo máximo es de 30 días calendario.
        </p>
      </div>
    </div>
  );
}

export default VaoPuePoliticasPage;