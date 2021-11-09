# Attendance


La aplicación permite el registro de asistencia de los profesores junto con los temas y observaciones específicas de cada clase.

## Instalación

Previamente, debe tener instalado la base de datos [mongodb](https://docs.mongodb.com/manual/installation/).

1. Use [Git](https://git-scm.com/) para la instalación.

```bash
git clone https://github.com/threevanny/attendance.git
```
```bash
cd attendance
```
2. Descargue las dependencias usando el administrador de paquete [npm](https://www.npmjs.com).
```bash
npm install
```
3. Ejecute localmente la base de datos mongodb
```bash
mongod
```
4. Inicie el servidor de la aplicación en modo de desarrollo.
```bash
npm run start:dev
```
5.Para ver si funciona, abra el explorador web y navegue hasta la dirección [localhost:3000/](http://localhost:3000/)
## API Endpoints

