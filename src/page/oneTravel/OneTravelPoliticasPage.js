import '../../App.css';

function OneTravelPoliticasPage() {
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
        <h2 style={{color: '#059669', fontSize: '1.8rem', marginBottom: '10px'}}>One Travel</h2>
        <p style={{fontStyle: 'italic', color: '#6b7280'}}>Última actualización: 21 de noviembre de 2025</p>
      </div>

      <div style={{backgroundColor: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #dbeafe', marginBottom: '30px'}}>
        <p><strong>One Travel</strong> es una aplicación de gestión de viajes corporativos y personales que conecta usuarios con agencias de viajes especializadas. Esta política describe cómo recopilamos, usamos y protegemos su información personal de acuerdo con las regulaciones internacionales de privacidad.</p>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>1. Información que Recopilamos</h2>
      <div style={{marginBottom: '25px'}}>
        <h3 style={{color: '#374151'}}>1.1 Información Personal</h3>
        <ul>
          <li><strong>Datos de Cuenta:</strong> Nombre completo, email, número de teléfono (proporcionados por la agencia)</li>
          <li><strong>Información de Viaje:</strong> Preferencias de destino, fechas, tipo de alojamiento</li>
          <li><strong>Documentos:</strong> Información de pasaporte/ID (solo para reservas internacionales)</li>
          <li><strong>Datos de Contacto:</strong> Información de emergencia y contactos de referencia</li>
        </ul>
        
        <h3 style={{color: '#374151'}}>1.2 Información Técnica</h3>
        <ul>
          <li>Dirección IP, tipo de dispositivo, sistema operativo</li>
          <li>Información de ubicación (solo cuando se autoriza específicamente)</li>
          <li>Registros de uso de la aplicación y preferencias</li>
          <li>Cookies de sesión necesarias para el funcionamiento</li>
        </ul>
      </div>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>2. Cómo Usamos su Información</h2>
      <ul style={{marginBottom: '25px'}}>
        <li><strong>Gestión de Reservas:</strong> Procesar y confirmar reservas de viajes</li>
        <li><strong>Comunicación:</strong> Enviar confirmaciones, actualizaciones y notificaciones importantes</li>
        <li><strong>Personalización:</strong> Adaptar recomendaciones según sus preferencias</li>
        <li><strong>Seguridad:</strong> Prevenir fraude y garantizar la seguridad de la plataforma</li>
        <li><strong>Cumplimiento Legal:</strong> Cumplir con regulaciones de viaje y fiscales</li>
        <li><strong>Soporte:</strong> Brindar asistencia técnica y durante el viaje</li>
      </ul>

      <h2 style={{color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px'}}>3. Gestión de Cuentas</h2>
      <div style={{backgroundColor: '#fef3c7', padding: '15px', borderRadius: '8px', border: '1px solid #fbbf24', marginBottom: '25px'}}>
        <h3 style={{color: '#92400e', margin: '0 0 10px 0'}}>Proceso de Cuenta Administrada</h3>
        <ul style={{margin: 0}}>
          <li><strong>Creación:</strong> Las cuentas son creadas exclusivamente por agencias de viajes autorizadas</li>
          <li><strong>Acceso:</strong> Recibirás credenciales de acceso directamente de tu agencia</li>
          <li><strong>Gestión:</strong> La agencia puede administrar ciertos aspectos de tu perfil</li>
          <li><strong>Eliminación:</strong> Puedes solicitar la eliminación de tu cuenta en cualquier momento</li>
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
        <li><strong>Agencias Autorizadas:</strong> Solo con la agencia que gestiona su cuenta</li>
        <li><strong>Proveedores de Viaje:</strong> Aerolíneas, hoteles, empresas de alquiler (solo datos necesarios)</li>
        <li><strong>Procesadores de Pago:</strong> Para transacciones seguras (datos encriptados)</li>
        <li><strong>Requerimientos Legales:</strong> Cuando sea obligatorio por ley</li>
        <li><strong>Emergencias:</strong> Para asistencia en situaciones de emergencia durante viajes</li>
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
        <li><strong>Historial de Viajes:</strong> 7 años para cumplimiento fiscal y legal</li>
        <li><strong>Datos de Pago:</strong> Según regulaciones de la industria de pagos</li>
        <li><strong>Logs Técnicos:</strong> 2 años para seguridad y soporte</li>
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
        <p style={{margin: 0}}><strong>One Travel no está dirigida a menores de 13 años.</strong> Si descubrimos que hemos recopilado datos de menores sin consentimiento parental verificable, eliminaremos esa información inmediatamente.</p>
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
          <li><strong>Email de Privacidad:</strong> privacy@onetravel.com</li>
          <li><strong>Soporte General:</strong> support@onetravel.com</li>
          <li><strong>Teléfono:</strong> +1 (800) ONE-TRAVEL</li>
          <li><strong>Dirección:</strong> One Travel Privacy Office, 123 Travel Street, Suite 456, Miami, FL 33101</li>
        </ul>
        
        <h3 style={{color: '#475569'}}>Eliminar Cuenta:</h3>
        <p style={{backgroundColor: '#e11d48', color: 'white', padding: '10px', borderRadius: '6px', margin: '10px 0'}}>
          <strong>Para eliminar permanentemente su cuenta:</strong> Envíe un email a delete@onetravel.com desde su email registrado con el asunto "Eliminación de Cuenta". Procesaremos su solicitud en un plazo máximo de 30 días.
        </p>
        
        <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: 0}}>
          <strong>Tiempo de respuesta:</strong> Responderemos a todas las consultas de privacidad dentro de 72 horas. Para ejercicio de derechos, el plazo máximo es de 30 días calendario.
        </p>
      </div>
    </div>
  );
}

export default OneTravelPoliticasPage;