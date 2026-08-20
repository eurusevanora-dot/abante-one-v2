# abante-tsr

Repositorio en blanco. Punto de partida, pendiente de definir alcance y stack.

## Origen

Este repositorio se llamaba `abante-one-v2` y contenía un andamio de Vite + React
generado y nunca terminado (un único commit, sin desplegar). Su contenido se ha
retirado por completo para reutilizar el repositorio desde cero.

Lo retirado, por si hiciera falta recuperarlo, está en el commit `71dbf82`.

> El andamio anterior incluía un `types.ts` generado contra el proyecto Supabase
> `xdmiuinekcgaiwmgxqxt`, que **no corresponde** a la base de Abante en uso
> (`rwidjjqvxwhjwflujtjt`). No reutilizar aquellos tipos: están desfasados y son
> de otra base.

## Reglas

- Nada de secretos en el repositorio. Las variables reales van en `.env` local
  (ignorado) y, en despliegue, en el panel del proveedor. `.env.example` solo
  documenta los nombres, nunca los valores.
