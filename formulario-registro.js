document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-registro");
    const confirmacionDiv = document.getElementById("confirmacion");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombres = document.getElementById("nombres").value.trim();
      const apellidos = document.getElementById("apellidos").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const carrera = document.getElementById("carrera").value;
  
      if (!correo.endsWith("@uamv.edu.ni")) {
        alert("Por favor, introduzca un correo válido con dominio @uamv.edu.ni");
        return;
      }
  
      const conferencias = [];
      if (form.github.checked) conferencias.push("Uso de GitHub en proyectos colaborativos");
      if (form.docker.checked) conferencias.push("Introducción a Docker para entornos de desarrollo");
      if (form.linux.checked) conferencias.push("Configuración básica de servidores Linux");
  
      confirmacionDiv.innerHTML = `
        <div style="box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3); border-radius: 15px; padding: 20px; width: 350px;"</div>
        <h3 style="color: green;">Registro exitoso </h3>
        <p><strong>Nombre:</strong> ${nombres}</p>
        <p><strong>Apellido:</strong> ${apellidos}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Carrera:</strong> ${carrera}</p>
        <p><strong>Conferencias seleccionadas:</strong> ${conferencias.length > 0 ? conferencias.join(", ") : "Ninguna seleccionada"}</p>
        <p style="color: green;"><strong>Se ha registrado su asistencia correctamente.</strong></p>
      `;
  
      form.reset();
    });
  });