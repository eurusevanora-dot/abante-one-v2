export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      alcance_edificio: {
        Row: {
          costo_estimado: number
          costo_real: number
          created_at: string
          departamento_dependencia: string | null
          edificio_id: string
          es_abante: boolean
          estado: string
          id: string
          notas: string | null
          partida_id: string
          porcentaje_avance: number
          proyecto_id: string
          requiere_compras: boolean
          requiere_subcontrata: boolean
          tiene_dependencia_tecnica: boolean
          updated_at: string
        }
        Insert: {
          costo_estimado?: number
          costo_real?: number
          created_at?: string
          departamento_dependencia?: string | null
          edificio_id: string
          es_abante?: boolean
          estado?: string
          id?: string
          notas?: string | null
          partida_id: string
          porcentaje_avance?: number
          proyecto_id: string
          requiere_compras?: boolean
          requiere_subcontrata?: boolean
          tiene_dependencia_tecnica?: boolean
          updated_at?: string
        }
        Update: {
          costo_estimado?: number
          costo_real?: number
          created_at?: string
          departamento_dependencia?: string | null
          edificio_id?: string
          es_abante?: boolean
          estado?: string
          id?: string
          notas?: string | null
          partida_id?: string
          porcentaje_avance?: number
          proyecto_id?: string
          requiere_compras?: boolean
          requiere_subcontrata?: boolean
          tiene_dependencia_tecnica?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "alcance_edificio_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcance_edificio_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: false
            referencedRelation: "partidas_plan_compras"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcance_edificio_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      alcances_capitulo: {
        Row: {
          alcance_id: string
          alcance_predecesor_id: string | null
          capitulo_id: string
          created_at: string
          es_obligatorio: boolean
          id: string
          orden: number
          requiere_alcance_anterior: boolean | null
        }
        Insert: {
          alcance_id: string
          alcance_predecesor_id?: string | null
          capitulo_id: string
          created_at?: string
          es_obligatorio?: boolean
          id?: string
          orden?: number
          requiere_alcance_anterior?: boolean | null
        }
        Update: {
          alcance_id?: string
          alcance_predecesor_id?: string | null
          capitulo_id?: string
          created_at?: string
          es_obligatorio?: boolean
          id?: string
          orden?: number
          requiere_alcance_anterior?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "alcances_capitulo_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcances_capitulo_alcance_predecesor_id_fkey"
            columns: ["alcance_predecesor_id"]
            isOneToOne: false
            referencedRelation: "alcances_capitulo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcances_capitulo_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_fase"
            referencedColumns: ["id"]
          },
        ]
      }
      alcances_proyecto: {
        Row: {
          alcance_id: string
          configuracion: Json | null
          congelado: boolean
          congelado_por_id: string | null
          created_at: string
          decision_id: string | null
          fecha_congelacion: string | null
          id: string
          notas: string | null
          proyecto_id: string
        }
        Insert: {
          alcance_id: string
          configuracion?: Json | null
          congelado?: boolean
          congelado_por_id?: string | null
          created_at?: string
          decision_id?: string | null
          fecha_congelacion?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
        }
        Update: {
          alcance_id?: string
          configuracion?: Json | null
          congelado?: boolean
          congelado_por_id?: string | null
          created_at?: string
          decision_id?: string | null
          fecha_congelacion?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alcances_proyecto_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcances_proyecto_congelado_por_id_fkey"
            columns: ["congelado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alcances_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      alertas_vencimiento_documentos: {
        Row: {
          creado_por_ia: boolean | null
          created_at: string
          datos_extraidos: Json | null
          descripcion: string | null
          dias_anticipacion: number | null
          documento_id: string | null
          estado: string
          fecha_aviso: string | null
          fecha_resolucion: string | null
          fecha_vencimiento: string
          id: string
          maquinaria_sc_id: string | null
          nivel_escalado: string | null
          notas: string | null
          prioridad: string | null
          proyecto_id: string
          resuelta_por_id: string | null
          subcontrata_id: string | null
          tipo_alerta: string
          titulo: string
          trabajador_sc_id: string | null
          updated_at: string
        }
        Insert: {
          creado_por_ia?: boolean | null
          created_at?: string
          datos_extraidos?: Json | null
          descripcion?: string | null
          dias_anticipacion?: number | null
          documento_id?: string | null
          estado?: string
          fecha_aviso?: string | null
          fecha_resolucion?: string | null
          fecha_vencimiento: string
          id?: string
          maquinaria_sc_id?: string | null
          nivel_escalado?: string | null
          notas?: string | null
          prioridad?: string | null
          proyecto_id: string
          resuelta_por_id?: string | null
          subcontrata_id?: string | null
          tipo_alerta?: string
          titulo: string
          trabajador_sc_id?: string | null
          updated_at?: string
        }
        Update: {
          creado_por_ia?: boolean | null
          created_at?: string
          datos_extraidos?: Json | null
          descripcion?: string | null
          dias_anticipacion?: number | null
          documento_id?: string | null
          estado?: string
          fecha_aviso?: string | null
          fecha_resolucion?: string | null
          fecha_vencimiento?: string
          id?: string
          maquinaria_sc_id?: string | null
          nivel_escalado?: string | null
          notas?: string | null
          prioridad?: string | null
          proyecto_id?: string
          resuelta_por_id?: string | null
          subcontrata_id?: string | null
          tipo_alerta?: string
          titulo?: string
          trabajador_sc_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "alertas_vencimiento_documentos_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alertas_vencimiento_documentos_maquinaria_sc_id_fkey"
            columns: ["maquinaria_sc_id"]
            isOneToOne: false
            referencedRelation: "maquinaria_subcontrata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alertas_vencimiento_documentos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alertas_vencimiento_documentos_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alertas_vencimiento_documentos_trabajador_sc_id_fkey"
            columns: ["trabajador_sc_id"]
            isOneToOne: false
            referencedRelation: "trabajadores_subcontrata"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          contexto: Json | null
          datos_anteriores: Json | null
          datos_nuevos: Json | null
          id: string
          ip_address: string | null
          operacion: string
          registro_id: string | null
          tabla: string
          timestamp: string
          user_agent: string | null
          usuario_id: string | null
        }
        Insert: {
          contexto?: Json | null
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          id?: string
          ip_address?: string | null
          operacion: string
          registro_id?: string | null
          tabla: string
          timestamp?: string
          user_agent?: string | null
          usuario_id?: string | null
        }
        Update: {
          contexto?: Json | null
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          id?: string
          ip_address?: string | null
          operacion?: string
          registro_id?: string | null
          tabla?: string
          timestamp?: string
          user_agent?: string | null
          usuario_id?: string | null
        }
        Relationships: []
      }
      auditoria_comercial: {
        Row: {
          accion: string
          created_at: string
          datos_anteriores: Json | null
          datos_nuevos: Json | null
          entidad_id: string
          entidad_tipo: string
          id: string
          notas: string | null
          proyecto_id: string | null
          usuario_id: string | null
        }
        Insert: {
          accion: string
          created_at?: string
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          entidad_id: string
          entidad_tipo: string
          id?: string
          notas?: string | null
          proyecto_id?: string | null
          usuario_id?: string | null
        }
        Update: {
          accion?: string
          created_at?: string
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          entidad_id?: string
          entidad_tipo?: string
          id?: string
          notas?: string | null
          proyecto_id?: string | null
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auditoria_comercial_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      bloqueos: {
        Row: {
          afecta_ruta_critica: boolean | null
          causa_raiz: string | null
          created_at: string
          decision_tomada: string | null
          descripcion: string | null
          escalado_a_id: string | null
          estado: Database["public"]["Enums"]["estado_bloqueo"]
          fase_abante_id: string | null
          fecha_deteccion: string
          fecha_escalado: string | null
          fecha_limite_resolucion: string | null
          fecha_resolucion: string | null
          id: string
          impacto_coste: number | null
          impacto_plazo_dias: number | null
          nivel_escalado: number | null
          orden_produccion_id: string | null
          pedido_id: string | null
          proyecto_id: string
          ptp_id: string | null
          reportado_por_id: string | null
          resolucion: string | null
          responsable_resolucion_id: string | null
          tipo: Database["public"]["Enums"]["tipo_bloqueo"]
          titulo: string
          updated_at: string
        }
        Insert: {
          afecta_ruta_critica?: boolean | null
          causa_raiz?: string | null
          created_at?: string
          decision_tomada?: string | null
          descripcion?: string | null
          escalado_a_id?: string | null
          estado?: Database["public"]["Enums"]["estado_bloqueo"]
          fase_abante_id?: string | null
          fecha_deteccion?: string
          fecha_escalado?: string | null
          fecha_limite_resolucion?: string | null
          fecha_resolucion?: string | null
          id?: string
          impacto_coste?: number | null
          impacto_plazo_dias?: number | null
          nivel_escalado?: number | null
          orden_produccion_id?: string | null
          pedido_id?: string | null
          proyecto_id: string
          ptp_id?: string | null
          reportado_por_id?: string | null
          resolucion?: string | null
          responsable_resolucion_id?: string | null
          tipo: Database["public"]["Enums"]["tipo_bloqueo"]
          titulo: string
          updated_at?: string
        }
        Update: {
          afecta_ruta_critica?: boolean | null
          causa_raiz?: string | null
          created_at?: string
          decision_tomada?: string | null
          descripcion?: string | null
          escalado_a_id?: string | null
          estado?: Database["public"]["Enums"]["estado_bloqueo"]
          fase_abante_id?: string | null
          fecha_deteccion?: string
          fecha_escalado?: string | null
          fecha_limite_resolucion?: string | null
          fecha_resolucion?: string | null
          id?: string
          impacto_coste?: number | null
          impacto_plazo_dias?: number | null
          nivel_escalado?: number | null
          orden_produccion_id?: string | null
          pedido_id?: string | null
          proyecto_id?: string
          ptp_id?: string | null
          reportado_por_id?: string | null
          resolucion?: string | null
          responsable_resolucion_id?: string | null
          tipo?: Database["public"]["Enums"]["tipo_bloqueo"]
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bloqueos_escalado_a_id_fkey"
            columns: ["escalado_a_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_fase_abante_id_fkey"
            columns: ["fase_abante_id"]
            isOneToOne: false
            referencedRelation: "fases_abante"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_pedido_id_fkey"
            columns: ["pedido_id"]
            isOneToOne: false
            referencedRelation: "pedidos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_ptp_id_fkey"
            columns: ["ptp_id"]
            isOneToOne: false
            referencedRelation: "ptp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_reportado_por_id_fkey"
            columns: ["reportado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bloqueos_responsable_resolucion_id_fkey"
            columns: ["responsable_resolucion_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      bots_telegram: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          id: string
          nombre: string
          reglas: Json | null
          tipo: string
          token_encrypted: string | null
          trabajador_id: string | null
          updated_at: string
          webhook_url: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          id?: string
          nombre: string
          reglas?: Json | null
          tipo: string
          token_encrypted?: string | null
          trabajador_id?: string | null
          updated_at?: string
          webhook_url?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          id?: string
          nombre?: string
          reglas?: Json | null
          tipo?: string
          token_encrypted?: string | null
          trabajador_id?: string | null
          updated_at?: string
          webhook_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bots_telegram_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      capitulos_compras_teorico: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          es_mano_obra: boolean | null
          es_material: boolean | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          es_mano_obra?: boolean | null
          es_material?: boolean | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          es_mano_obra?: boolean | null
          es_material?: boolean | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      capitulos_fase: {
        Row: {
          activo: boolean
          capitulo_padre_id: string | null
          capitulo_predecesor_id: string | null
          codigo: string
          created_at: string
          descripcion: string | null
          es_obligatorio: boolean | null
          fase_tipo_proyecto_id: string
          id: string
          nombre: string
          orden: number
          protegido: boolean | null
          requiere_capitulo_anterior: boolean | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          capitulo_padre_id?: string | null
          capitulo_predecesor_id?: string | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean | null
          fase_tipo_proyecto_id: string
          id?: string
          nombre: string
          orden?: number
          protegido?: boolean | null
          requiere_capitulo_anterior?: boolean | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          capitulo_padre_id?: string | null
          capitulo_predecesor_id?: string | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean | null
          fase_tipo_proyecto_id?: string
          id?: string
          nombre?: string
          orden?: number
          protegido?: boolean | null
          requiere_capitulo_anterior?: boolean | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "capitulos_fase_capitulo_padre_id_fkey"
            columns: ["capitulo_padre_id"]
            isOneToOne: false
            referencedRelation: "capitulos_fase"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "capitulos_fase_capitulo_predecesor_id_fkey"
            columns: ["capitulo_predecesor_id"]
            isOneToOne: false
            referencedRelation: "capitulos_fase"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "capitulos_fase_fase_tipo_proyecto_id_fkey"
            columns: ["fase_tipo_proyecto_id"]
            isOneToOne: false
            referencedRelation: "fases_tipo_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      capitulos_presto: {
        Row: {
          capitulo_padre_id: string | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          importe_estimado: number | null
          nivel: number | null
          nombre: string
          orden: number | null
          presupuesto_id: string | null
        }
        Insert: {
          capitulo_padre_id?: string | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          importe_estimado?: number | null
          nivel?: number | null
          nombre: string
          orden?: number | null
          presupuesto_id?: string | null
        }
        Update: {
          capitulo_padre_id?: string | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          importe_estimado?: number | null
          nivel?: number | null
          nombre?: string
          orden?: number | null
          presupuesto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "capitulos_presto_capitulo_padre_id_fkey"
            columns: ["capitulo_padre_id"]
            isOneToOne: false
            referencedRelation: "capitulos_presto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "capitulos_presto_presupuesto_id_fkey"
            columns: ["presupuesto_id"]
            isOneToOne: false
            referencedRelation: "presupuestos_presto"
            referencedColumns: ["id"]
          },
        ]
      }
      capitulos_proyecto: {
        Row: {
          activo: boolean
          capitulo_padre_id: string | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nivel: number
          nombre: string
          orden: number
          protegido: boolean | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          capitulo_padre_id?: string | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nivel?: number
          nombre: string
          orden?: number
          protegido?: boolean | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          capitulo_padre_id?: string | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nivel?: number
          nombre?: string
          orden?: number
          protegido?: boolean | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "capitulos_proyecto_capitulo_padre_id_fkey"
            columns: ["capitulo_padre_id"]
            isOneToOne: false
            referencedRelation: "capitulos_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      carpetas_proyecto: {
        Row: {
          codigo: string
          created_at: string | null
          descripcion: string | null
          es_sistema: boolean | null
          fase_origen: string | null
          id: string
          nombre: string
          orden: number | null
          proyecto_id: string
          updated_at: string | null
        }
        Insert: {
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          es_sistema?: boolean | null
          fase_origen?: string | null
          id?: string
          nombre: string
          orden?: number | null
          proyecto_id: string
          updated_at?: string | null
        }
        Update: {
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          es_sistema?: boolean | null
          fase_origen?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          proyecto_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "carpetas_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogo_costes_logistica: {
        Row: {
          activo: boolean | null
          concepto: string
          coste_unitario: number | null
          created_at: string | null
          id: string
          moneda: string | null
          observaciones: string | null
          unidad: string | null
        }
        Insert: {
          activo?: boolean | null
          concepto: string
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          moneda?: string | null
          observaciones?: string | null
          unidad?: string | null
        }
        Update: {
          activo?: boolean | null
          concepto?: string
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          moneda?: string | null
          observaciones?: string | null
          unidad?: string | null
        }
        Relationships: []
      }
      catalogo_costes_viaje: {
        Row: {
          activo: boolean | null
          aplica_por_fase: boolean | null
          aplica_por_persona: boolean | null
          coste_unitario: number | null
          created_at: string | null
          descripcion: string
          id: string
          tipo: string
          unidad: string | null
        }
        Insert: {
          activo?: boolean | null
          aplica_por_fase?: boolean | null
          aplica_por_persona?: boolean | null
          coste_unitario?: number | null
          created_at?: string | null
          descripcion: string
          id?: string
          tipo?: string
          unidad?: string | null
        }
        Update: {
          activo?: boolean | null
          aplica_por_fase?: boolean | null
          aplica_por_persona?: boolean | null
          coste_unitario?: number | null
          created_at?: string | null
          descripcion?: string
          id?: string
          tipo?: string
          unidad?: string | null
        }
        Relationships: []
      }
      catalogo_estados_contrato: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      catalogo_estados_linea: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      catalogo_estados_paso: {
        Row: {
          activo: boolean | null
          codigo: string
          color: string | null
          created_at: string | null
          icono: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          color?: string | null
          created_at?: string | null
          icono?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          color?: string | null
          created_at?: string | null
          icono?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      catalogo_estados_proyecto: {
        Row: {
          activo: boolean | null
          codigo: string
          color: string | null
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      catalogo_maquinaria_auxiliar: {
        Row: {
          activo: boolean | null
          coste_unitario: number | null
          created_at: string | null
          id: string
          nombre: string
          observaciones: string | null
          proveedor_id: string | null
          requiere_operario: boolean | null
          tipo: string | null
          unidad: string | null
        }
        Insert: {
          activo?: boolean | null
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          nombre: string
          observaciones?: string | null
          proveedor_id?: string | null
          requiere_operario?: boolean | null
          tipo?: string | null
          unidad?: string | null
        }
        Update: {
          activo?: boolean | null
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          nombre?: string
          observaciones?: string | null
          proveedor_id?: string | null
          requiere_operario?: boolean | null
          tipo?: string | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "catalogo_maquinaria_auxiliar_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogo_materiales: {
        Row: {
          activo: boolean | null
          created_at: string | null
          familia: string
          id: string
          iva_pct: number | null
          nombre: string
          observaciones: string | null
          precio_unitario: number | null
          proveedor_default_id: string | null
          unidad: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          created_at?: string | null
          familia?: string
          id?: string
          iva_pct?: number | null
          nombre: string
          observaciones?: string | null
          precio_unitario?: number | null
          proveedor_default_id?: string | null
          unidad?: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          created_at?: string | null
          familia?: string
          id?: string
          iva_pct?: number | null
          nombre?: string
          observaciones?: string | null
          precio_unitario?: number | null
          proveedor_default_id?: string | null
          unidad?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "catalogo_materiales_proveedor_default_id_fkey"
            columns: ["proveedor_default_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      catalogo_modelos_constructivos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          sistema_estructural: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          sistema_estructural?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          sistema_estructural?: string | null
        }
        Relationships: []
      }
      catalogo_origenes_referencia: {
        Row: {
          codigo: string
          created_at: string | null
          id: string
          nombre: string
        }
        Insert: {
          codigo: string
          created_at?: string | null
          id?: string
          nombre: string
        }
        Update: {
          codigo?: string
          created_at?: string | null
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      catalogo_tipologias_edificio: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      catalogo_tipologias_proyecto: {
        Row: {
          activo: boolean | null
          codigo: string
          color: string | null
          created_at: string | null
          descripcion: string | null
          icono: string | null
          id: string
          nombre: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      catalogo_tipos_entidad: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          id: string
          nombre: string
          tabla_referencia: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          id?: string
          nombre: string
          tabla_referencia: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          id?: string
          nombre?: string
          tabla_referencia?: string
        }
        Relationships: []
      }
      catalogo_tipos_evento: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          modulo: string | null
          nombre: string
          severidad: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modulo?: string | null
          nombre: string
          severidad?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modulo?: string | null
          nombre?: string
          severidad?: string | null
        }
        Relationships: []
      }
      catalogo_tipos_gate: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          obligatorio: boolean | null
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          obligatorio?: boolean | null
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          obligatorio?: boolean | null
          orden?: number
        }
        Relationships: []
      }
      catalogos_proveedores: {
        Row: {
          archivo_nombre: string
          archivo_path: string
          categoria: string
          chunks_generados: number | null
          codigo: string
          created_at: string
          descripcion: string | null
          fecha_procesado: string | null
          id: string
          nombre: string
          notas: string | null
          procesado: boolean | null
          proveedor: string
          tags: string[] | null
          tamano_bytes: number | null
          updated_at: string
          version: string | null
          vigente: boolean | null
        }
        Insert: {
          archivo_nombre: string
          archivo_path: string
          categoria?: string
          chunks_generados?: number | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          id?: string
          nombre: string
          notas?: string | null
          procesado?: boolean | null
          proveedor: string
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          version?: string | null
          vigente?: boolean | null
        }
        Update: {
          archivo_nombre?: string
          archivo_path?: string
          categoria?: string
          chunks_generados?: number | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          procesado?: boolean | null
          proveedor?: string
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          version?: string | null
          vigente?: boolean | null
        }
        Relationships: []
      }
      categorias_configurador: {
        Row: {
          activo: boolean
          codigo: string
          created_at: string
          descripcion: string | null
          icono: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean
          codigo: string
          created_at?: string
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean
          codigo?: string
          created_at?: string
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      categorias_coste: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          tipo: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          tipo: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          tipo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categorias_gasto_ci: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          tipo: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          tipo: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          tipo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categorias_laborales: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      categorias_mano_obra: {
        Row: {
          activo: boolean | null
          codigo: string
          coste_hora: number
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          rendimiento: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          coste_hora?: number
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          rendimiento?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          coste_hora?: number
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          rendimiento?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      centros_trabajo: {
        Row: {
          activo: boolean | null
          codigo: string
          codigo_postal: string | null
          created_at: string
          departamento_id: string | null
          direccion: string | null
          empresa_id: string | null
          id: string
          localidad: string | null
          nombre: string
          provincia: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          codigo_postal?: string | null
          created_at?: string
          departamento_id?: string | null
          direccion?: string | null
          empresa_id?: string | null
          id?: string
          localidad?: string | null
          nombre: string
          provincia?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          codigo_postal?: string | null
          created_at?: string
          departamento_id?: string | null
          direccion?: string | null
          empresa_id?: string | null
          id?: string
          localidad?: string | null
          nombre?: string
          provincia?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "centros_trabajo_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centros_trabajo_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      checklist_prl_trabajadores: {
        Row: {
          categoria: string
          completado: boolean
          created_at: string
          documento_id: string | null
          es_obligatorio: boolean
          fecha_completado: string | null
          id: string
          item_codigo: string
          item_nombre: string
          notas: string | null
          orden: number | null
          trabajador_id: string
          updated_at: string
        }
        Insert: {
          categoria?: string
          completado?: boolean
          created_at?: string
          documento_id?: string | null
          es_obligatorio?: boolean
          fecha_completado?: string | null
          id?: string
          item_codigo: string
          item_nombre: string
          notas?: string | null
          orden?: number | null
          trabajador_id: string
          updated_at?: string
        }
        Update: {
          categoria?: string
          completado?: boolean
          created_at?: string
          documento_id?: string | null
          es_obligatorio?: boolean
          fecha_completado?: string | null
          id?: string
          item_codigo?: string
          item_nombre?: string
          notas?: string | null
          orden?: number | null
          trabajador_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checklist_prl_trabajadores_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos_trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checklist_prl_trabajadores_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      chunks_catalogos: {
        Row: {
          catalogo_id: string
          contenido: string
          contenido_limpio: string | null
          created_at: string
          id: string
          orden: number | null
          pagina: number | null
          palabras_clave: string[] | null
          seccion: string | null
          tipo_contenido: string | null
        }
        Insert: {
          catalogo_id: string
          contenido: string
          contenido_limpio?: string | null
          created_at?: string
          id?: string
          orden?: number | null
          pagina?: number | null
          palabras_clave?: string[] | null
          seccion?: string | null
          tipo_contenido?: string | null
        }
        Update: {
          catalogo_id?: string
          contenido?: string
          contenido_limpio?: string | null
          created_at?: string
          id?: string
          orden?: number | null
          pagina?: number | null
          palabras_clave?: string[] | null
          seccion?: string | null
          tipo_contenido?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chunks_catalogos_catalogo_id_fkey"
            columns: ["catalogo_id"]
            isOneToOne: false
            referencedRelation: "catalogos_proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      chunks_cte: {
        Row: {
          aplicable_a: string[] | null
          contenido: string
          contenido_limpio: string | null
          created_at: string
          documento_id: string
          id: string
          importancia: number | null
          orden: number | null
          pagina: number | null
          palabras_clave: string[] | null
          seccion: string | null
          subseccion: string | null
          tipo_contenido: string | null
        }
        Insert: {
          aplicable_a?: string[] | null
          contenido: string
          contenido_limpio?: string | null
          created_at?: string
          documento_id: string
          id?: string
          importancia?: number | null
          orden?: number | null
          pagina?: number | null
          palabras_clave?: string[] | null
          seccion?: string | null
          subseccion?: string | null
          tipo_contenido?: string | null
        }
        Update: {
          aplicable_a?: string[] | null
          contenido?: string
          contenido_limpio?: string | null
          created_at?: string
          documento_id?: string
          id?: string
          importancia?: number | null
          orden?: number | null
          pagina?: number | null
          palabras_clave?: string[] | null
          seccion?: string | null
          subseccion?: string | null
          tipo_contenido?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chunks_cte_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos_cte"
            referencedColumns: ["id"]
          },
        ]
      }
      cierres_proyecto: {
        Row: {
          actualizaciones_matriz: Json | null
          actualizaciones_ptp: Json | null
          analisis_completado: boolean | null
          aprobado_por_id: string | null
          bloqueos_criticos: number | null
          cerrado_por_id: string | null
          coste_planificado: number | null
          coste_real: number | null
          created_at: string
          desviacion_coste: number | null
          desviacion_plazo_dias: number | null
          dias_perdidos_bloqueos: number | null
          fecha_aprobacion: string | null
          fecha_cierre: string | null
          id: string
          incidencias_pendientes: number | null
          incidencias_resueltas: number | null
          lecciones_aprendidas: Json | null
          margen_planificado: number | null
          margen_real: number | null
          mejoras_propuestas: Json | null
          observaciones: string | null
          plazo_planificado_dias: number | null
          plazo_real_dias: number | null
          proyecto_id: string
          total_bloqueos: number | null
          total_incidencias: number | null
          updated_at: string
        }
        Insert: {
          actualizaciones_matriz?: Json | null
          actualizaciones_ptp?: Json | null
          analisis_completado?: boolean | null
          aprobado_por_id?: string | null
          bloqueos_criticos?: number | null
          cerrado_por_id?: string | null
          coste_planificado?: number | null
          coste_real?: number | null
          created_at?: string
          desviacion_coste?: number | null
          desviacion_plazo_dias?: number | null
          dias_perdidos_bloqueos?: number | null
          fecha_aprobacion?: string | null
          fecha_cierre?: string | null
          id?: string
          incidencias_pendientes?: number | null
          incidencias_resueltas?: number | null
          lecciones_aprendidas?: Json | null
          margen_planificado?: number | null
          margen_real?: number | null
          mejoras_propuestas?: Json | null
          observaciones?: string | null
          plazo_planificado_dias?: number | null
          plazo_real_dias?: number | null
          proyecto_id: string
          total_bloqueos?: number | null
          total_incidencias?: number | null
          updated_at?: string
        }
        Update: {
          actualizaciones_matriz?: Json | null
          actualizaciones_ptp?: Json | null
          analisis_completado?: boolean | null
          aprobado_por_id?: string | null
          bloqueos_criticos?: number | null
          cerrado_por_id?: string | null
          coste_planificado?: number | null
          coste_real?: number | null
          created_at?: string
          desviacion_coste?: number | null
          desviacion_plazo_dias?: number | null
          dias_perdidos_bloqueos?: number | null
          fecha_aprobacion?: string | null
          fecha_cierre?: string | null
          id?: string
          incidencias_pendientes?: number | null
          incidencias_resueltas?: number | null
          lecciones_aprendidas?: Json | null
          margen_planificado?: number | null
          margen_real?: number | null
          mejoras_propuestas?: Json | null
          observaciones?: string | null
          plazo_planificado_dias?: number | null
          plazo_real_dias?: number | null
          proyecto_id?: string
          total_bloqueos?: number | null
          total_incidencias?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cierres_proyecto_aprobado_por_id_fkey"
            columns: ["aprobado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cierres_proyecto_cerrado_por_id_fkey"
            columns: ["cerrado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cierres_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: true
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      clientes: {
        Row: {
          cif_nif: string | null
          codigo: string
          codigo_postal: string | null
          comercial_asignado_id: string | null
          created_at: string
          direccion: string | null
          email: string | null
          email_facturacion: string | null
          estado: Database["public"]["Enums"]["estado_registro"]
          id: string
          localidad: string | null
          nombre: string
          notas: string | null
          origen_datos: string | null
          pais: string
          persona_contacto: string | null
          provincia: string | null
          razon_social: string | null
          telefono: string | null
          telefono_alt: string | null
          tipo: Database["public"]["Enums"]["tipo_cliente"]
          updated_at: string
        }
        Insert: {
          cif_nif?: string | null
          codigo: string
          codigo_postal?: string | null
          comercial_asignado_id?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          email_facturacion?: string | null
          estado?: Database["public"]["Enums"]["estado_registro"]
          id?: string
          localidad?: string | null
          nombre: string
          notas?: string | null
          origen_datos?: string | null
          pais?: string
          persona_contacto?: string | null
          provincia?: string | null
          razon_social?: string | null
          telefono?: string | null
          telefono_alt?: string | null
          tipo?: Database["public"]["Enums"]["tipo_cliente"]
          updated_at?: string
        }
        Update: {
          cif_nif?: string | null
          codigo?: string
          codigo_postal?: string | null
          comercial_asignado_id?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          email_facturacion?: string | null
          estado?: Database["public"]["Enums"]["estado_registro"]
          id?: string
          localidad?: string | null
          nombre?: string
          notas?: string | null
          origen_datos?: string | null
          pais?: string
          persona_contacto?: string | null
          provincia?: string | null
          razon_social?: string | null
          telefono?: string | null
          telefono_alt?: string | null
          tipo?: Database["public"]["Enums"]["tipo_cliente"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clientes_comercial_asignado_id_fkey"
            columns: ["comercial_asignado_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      clientes_comerciales: {
        Row: {
          activo: boolean | null
          cliente_id: string
          comercial_id: string
          created_at: string | null
          exclusivo: boolean | null
          fecha_asignacion: string | null
          id: string
          notas: string | null
        }
        Insert: {
          activo?: boolean | null
          cliente_id: string
          comercial_id: string
          created_at?: string | null
          exclusivo?: boolean | null
          fecha_asignacion?: string | null
          id?: string
          notas?: string | null
        }
        Update: {
          activo?: boolean | null
          cliente_id?: string
          comercial_id?: string
          created_at?: string | null
          exclusivo?: boolean | null
          fecha_asignacion?: string | null
          id?: string
          notas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clientes_comerciales_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clientes_comerciales_comercial_id_fkey"
            columns: ["comercial_id"]
            isOneToOne: false
            referencedRelation: "comerciales_comisionistas"
            referencedColumns: ["id"]
          },
        ]
      }
      comerciales_comisionistas: {
        Row: {
          activo: boolean | null
          apellidos: string | null
          codigo: string
          codigo_postal: string | null
          created_at: string | null
          direccion: string | null
          email: string | null
          empresa: string | null
          fecha_alta: string | null
          fecha_baja: string | null
          iban: string | null
          id: string
          localidad: string | null
          nif_cif: string | null
          nombre: string
          notas: string | null
          pais: string | null
          porcentaje_comision_defecto: number | null
          provincia: string | null
          telefono: string | null
          telefono_secundario: string | null
          tipo: string
          trabajador_id: string | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          apellidos?: string | null
          codigo: string
          codigo_postal?: string | null
          created_at?: string | null
          direccion?: string | null
          email?: string | null
          empresa?: string | null
          fecha_alta?: string | null
          fecha_baja?: string | null
          iban?: string | null
          id?: string
          localidad?: string | null
          nif_cif?: string | null
          nombre: string
          notas?: string | null
          pais?: string | null
          porcentaje_comision_defecto?: number | null
          provincia?: string | null
          telefono?: string | null
          telefono_secundario?: string | null
          tipo?: string
          trabajador_id?: string | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          apellidos?: string | null
          codigo?: string
          codigo_postal?: string | null
          created_at?: string | null
          direccion?: string | null
          email?: string | null
          empresa?: string | null
          fecha_alta?: string | null
          fecha_baja?: string | null
          iban?: string | null
          id?: string
          localidad?: string | null
          nif_cif?: string | null
          nombre?: string
          notas?: string | null
          pais?: string | null
          porcentaje_comision_defecto?: number | null
          provincia?: string | null
          telefono?: string | null
          telefono_secundario?: string | null
          tipo?: string
          trabajador_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comerciales_comisionistas_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      comisiones_ofertas: {
        Row: {
          base_calculo: number
          comercial_id: string
          created_at: string | null
          estado: string | null
          id: string
          importe_comision: number | null
          notas: string | null
          oferta_id: string
          porcentaje_comision: number
          updated_at: string | null
        }
        Insert: {
          base_calculo?: number
          comercial_id: string
          created_at?: string | null
          estado?: string | null
          id?: string
          importe_comision?: number | null
          notas?: string | null
          oferta_id: string
          porcentaje_comision: number
          updated_at?: string | null
        }
        Update: {
          base_calculo?: number
          comercial_id?: string
          created_at?: string | null
          estado?: string | null
          id?: string
          importe_comision?: number | null
          notas?: string | null
          oferta_id?: string
          porcentaje_comision?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comisiones_ofertas_comercial_id_fkey"
            columns: ["comercial_id"]
            isOneToOne: false
            referencedRelation: "comerciales_comisionistas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comisiones_ofertas_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_alertas: {
        Row: {
          created_at: string
          descripcion: string | null
          fecha_resolucion: string | null
          id: string
          leida: boolean | null
          nivel: string
          notificado_email: boolean | null
          notificado_telegram: boolean | null
          orden_id: string | null
          partida_proyecto_id: string | null
          proyecto_id: string | null
          resuelta: boolean | null
          tipo: string
          titulo: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          fecha_resolucion?: string | null
          id?: string
          leida?: boolean | null
          nivel: string
          notificado_email?: boolean | null
          notificado_telegram?: boolean | null
          orden_id?: string | null
          partida_proyecto_id?: string | null
          proyecto_id?: string | null
          resuelta?: boolean | null
          tipo: string
          titulo: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          fecha_resolucion?: string | null
          id?: string
          leida?: boolean | null
          nivel?: string
          notificado_email?: boolean | null
          notificado_telegram?: boolean | null
          orden_id?: string | null
          partida_proyecto_id?: string | null
          proyecto_id?: string | null
          resuelta?: boolean | null
          tipo?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_alertas_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "compras_ordenes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_alertas_partida_proyecto_id_fkey"
            columns: ["partida_proyecto_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_alertas_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_articulo_partida: {
        Row: {
          articulo_compuesto_id: string | null
          articulo_id: string | null
          cantidad: number
          cantidad_convertida: number | null
          cantidad_kg: number | null
          cantidad_m2: number | null
          cantidad_ml: number | null
          cantidad_por_edificio: Json | null
          cantidad_ud: number | null
          capitulo: string | null
          centro_coste: string | null
          codigo_manual: string | null
          comprado: boolean | null
          condiciones_pago: string | null
          created_at: string
          descripcion_larga: string | null
          descripcion_manual: string | null
          edificio_id: string | null
          edificios_seleccionados: string[] | null
          entregas_programadas: Json | null
          factor_conversion: number | null
          familia_id: string | null
          fecha_compra: string | null
          fecha_entrega_prevista: string | null
          fecha_entrega_real: string | null
          forma_pago: string | null
          id: string
          marca: string | null
          modelo: string | null
          notas: string | null
          partida_presto: string | null
          partida_proyecto_id: string
          pendiente_pagar: number | null
          precio_ofertado: number | null
          precio_pagado: number | null
          precio_total_objetivo: number | null
          precio_unitario_objetivo: number | null
          proveedor_id: string | null
          referencia_compra: string | null
          subfamilia1: string | null
          subfamilia2: string | null
          total_calculado: number | null
          unidad_base: string | null
          unidad_facturable: string | null
          unidad_mostrar: string | null
          updated_at: string
        }
        Insert: {
          articulo_compuesto_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          cantidad_convertida?: number | null
          cantidad_kg?: number | null
          cantidad_m2?: number | null
          cantidad_ml?: number | null
          cantidad_por_edificio?: Json | null
          cantidad_ud?: number | null
          capitulo?: string | null
          centro_coste?: string | null
          codigo_manual?: string | null
          comprado?: boolean | null
          condiciones_pago?: string | null
          created_at?: string
          descripcion_larga?: string | null
          descripcion_manual?: string | null
          edificio_id?: string | null
          edificios_seleccionados?: string[] | null
          entregas_programadas?: Json | null
          factor_conversion?: number | null
          familia_id?: string | null
          fecha_compra?: string | null
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          forma_pago?: string | null
          id?: string
          marca?: string | null
          modelo?: string | null
          notas?: string | null
          partida_presto?: string | null
          partida_proyecto_id: string
          pendiente_pagar?: number | null
          precio_ofertado?: number | null
          precio_pagado?: number | null
          precio_total_objetivo?: number | null
          precio_unitario_objetivo?: number | null
          proveedor_id?: string | null
          referencia_compra?: string | null
          subfamilia1?: string | null
          subfamilia2?: string | null
          total_calculado?: number | null
          unidad_base?: string | null
          unidad_facturable?: string | null
          unidad_mostrar?: string | null
          updated_at?: string
        }
        Update: {
          articulo_compuesto_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          cantidad_convertida?: number | null
          cantidad_kg?: number | null
          cantidad_m2?: number | null
          cantidad_ml?: number | null
          cantidad_por_edificio?: Json | null
          cantidad_ud?: number | null
          capitulo?: string | null
          centro_coste?: string | null
          codigo_manual?: string | null
          comprado?: boolean | null
          condiciones_pago?: string | null
          created_at?: string
          descripcion_larga?: string | null
          descripcion_manual?: string | null
          edificio_id?: string | null
          edificios_seleccionados?: string[] | null
          entregas_programadas?: Json | null
          factor_conversion?: number | null
          familia_id?: string | null
          fecha_compra?: string | null
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          forma_pago?: string | null
          id?: string
          marca?: string | null
          modelo?: string | null
          notas?: string | null
          partida_presto?: string | null
          partida_proyecto_id?: string
          pendiente_pagar?: number | null
          precio_ofertado?: number | null
          precio_pagado?: number | null
          precio_total_objetivo?: number | null
          precio_unitario_objetivo?: number | null
          proveedor_id?: string | null
          referencia_compra?: string | null
          subfamilia1?: string | null
          subfamilia2?: string | null
          total_calculado?: number | null
          unidad_base?: string | null
          unidad_facturable?: string | null
          unidad_mostrar?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulo_partida_articulo_compuesto_id_fkey"
            columns: ["articulo_compuesto_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos_compuestos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_familia_id_fkey"
            columns: ["familia_id"]
            isOneToOne: false
            referencedRelation: "compras_familias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_partida_proyecto_id_fkey"
            columns: ["partida_proyecto_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulo_partida_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_articulos: {
        Row: {
          activo: boolean | null
          articulo_mo_id: string | null
          articulo_origen_id: string | null
          capitulo_id: string | null
          centro_coste: string | null
          codigo_interno: string
          created_at: string
          created_by: string | null
          departamento_responsable_id: string | null
          descripcion: string
          descripcion_larga: string | null
          es_mano_obra: boolean | null
          estado: Database["public"]["Enums"]["estado_registro"] | null
          familia_id: string | null
          genera_mano_obra: boolean
          horas_estandar_por_unidad: number | null
          id: string
          notas: string | null
          precio_base: number | null
          precio_objetivo: number | null
          precio_venta: number | null
          propiedades: Json | null
          proveedor_principal_id: string | null
          referencia_proveedor: string | null
          stock_actual: number | null
          stock_minimo: number | null
          subfamilia_id: string | null
          tipo_coste_id: string | null
          unidad: string
          updated_at: string
          updated_by: string | null
          version: number | null
        }
        Insert: {
          activo?: boolean | null
          articulo_mo_id?: string | null
          articulo_origen_id?: string | null
          capitulo_id?: string | null
          centro_coste?: string | null
          codigo_interno: string
          created_at?: string
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion: string
          descripcion_larga?: string | null
          es_mano_obra?: boolean | null
          estado?: Database["public"]["Enums"]["estado_registro"] | null
          familia_id?: string | null
          genera_mano_obra?: boolean
          horas_estandar_por_unidad?: number | null
          id?: string
          notas?: string | null
          precio_base?: number | null
          precio_objetivo?: number | null
          precio_venta?: number | null
          propiedades?: Json | null
          proveedor_principal_id?: string | null
          referencia_proveedor?: string | null
          stock_actual?: number | null
          stock_minimo?: number | null
          subfamilia_id?: string | null
          tipo_coste_id?: string | null
          unidad?: string
          updated_at?: string
          updated_by?: string | null
          version?: number | null
        }
        Update: {
          activo?: boolean | null
          articulo_mo_id?: string | null
          articulo_origen_id?: string | null
          capitulo_id?: string | null
          centro_coste?: string | null
          codigo_interno?: string
          created_at?: string
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion?: string
          descripcion_larga?: string | null
          es_mano_obra?: boolean | null
          estado?: Database["public"]["Enums"]["estado_registro"] | null
          familia_id?: string | null
          genera_mano_obra?: boolean
          horas_estandar_por_unidad?: number | null
          id?: string
          notas?: string | null
          precio_base?: number | null
          precio_objetivo?: number | null
          precio_venta?: number | null
          propiedades?: Json | null
          proveedor_principal_id?: string | null
          referencia_proveedor?: string | null
          stock_actual?: number | null
          stock_minimo?: number | null
          subfamilia_id?: string | null
          tipo_coste_id?: string | null
          unidad?: string
          updated_at?: string
          updated_by?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulos_articulo_mo_id_fkey"
            columns: ["articulo_mo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_mo_id_fkey"
            columns: ["articulo_mo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_origen_id_fkey"
            columns: ["articulo_origen_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_origen_id_fkey"
            columns: ["articulo_origen_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "compras_capitulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_departamento_responsable_id_fkey"
            columns: ["departamento_responsable_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_familia_id_fkey"
            columns: ["familia_id"]
            isOneToOne: false
            referencedRelation: "compras_familias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_proveedor_principal_id_fkey"
            columns: ["proveedor_principal_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_subfamilia_id_fkey"
            columns: ["subfamilia_id"]
            isOneToOne: false
            referencedRelation: "compras_subfamilias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_tipo_coste_id_fkey"
            columns: ["tipo_coste_id"]
            isOneToOne: false
            referencedRelation: "compras_tipos_coste"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_articulos_codigos_proveedor: {
        Row: {
          articulo_id: string
          codigo_proveedor: string
          created_at: string
          descripcion_proveedor: string | null
          es_principal: boolean | null
          id: string
          proveedor_id: string
        }
        Insert: {
          articulo_id: string
          codigo_proveedor: string
          created_at?: string
          descripcion_proveedor?: string | null
          es_principal?: boolean | null
          id?: string
          proveedor_id: string
        }
        Update: {
          articulo_id?: string
          codigo_proveedor?: string
          created_at?: string
          descripcion_proveedor?: string | null
          es_principal?: boolean | null
          id?: string
          proveedor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulos_codigos_proveedor_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_codigos_proveedor_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_codigos_proveedor_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_articulos_compuestos: {
        Row: {
          activo: boolean | null
          codigo_compuesto: string
          created_at: string
          created_by: string | null
          descripcion: string
          descripcion_larga: string | null
          en_proceso: boolean
          id: string
          oculto: boolean
          plantilla_codigo_id: string | null
          unidad: string
          updated_at: string
          updated_by: string | null
          version: number | null
        }
        Insert: {
          activo?: boolean | null
          codigo_compuesto: string
          created_at?: string
          created_by?: string | null
          descripcion: string
          descripcion_larga?: string | null
          en_proceso?: boolean
          id?: string
          oculto?: boolean
          plantilla_codigo_id?: string | null
          unidad?: string
          updated_at?: string
          updated_by?: string | null
          version?: number | null
        }
        Update: {
          activo?: boolean | null
          codigo_compuesto?: string
          created_at?: string
          created_by?: string | null
          descripcion?: string
          descripcion_larga?: string | null
          en_proceso?: boolean
          id?: string
          oculto?: boolean
          plantilla_codigo_id?: string | null
          unidad?: string
          updated_at?: string
          updated_by?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulos_compuestos_plantilla_codigo_id_fkey"
            columns: ["plantilla_codigo_id"]
            isOneToOne: false
            referencedRelation: "compras_plantillas_codigo"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_articulos_compuestos_detalle: {
        Row: {
          articulo_compuesto_hijo_id: string | null
          articulo_compuesto_id: string
          articulo_simple_id: string | null
          cantidad: number
          capitulo_general_id: string | null
          created_at: string
          id: string
          linea_padre_id: string | null
          notas: string | null
          orden: number | null
          updated_at: string
        }
        Insert: {
          articulo_compuesto_hijo_id?: string | null
          articulo_compuesto_id: string
          articulo_simple_id?: string | null
          cantidad?: number
          capitulo_general_id?: string | null
          created_at?: string
          id?: string
          linea_padre_id?: string | null
          notas?: string | null
          orden?: number | null
          updated_at?: string
        }
        Update: {
          articulo_compuesto_hijo_id?: string | null
          articulo_compuesto_id?: string
          articulo_simple_id?: string | null
          cantidad?: number
          capitulo_general_id?: string | null
          created_at?: string
          id?: string
          linea_padre_id?: string | null
          notas?: string | null
          orden?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulos_compuestos_de_articulo_compuesto_hijo_id_fkey"
            columns: ["articulo_compuesto_hijo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos_compuestos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_compuestos_detalle_articulo_compuesto_id_fkey"
            columns: ["articulo_compuesto_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos_compuestos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_compuestos_detalle_articulo_simple_id_fkey"
            columns: ["articulo_simple_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_compuestos_detalle_articulo_simple_id_fkey"
            columns: ["articulo_simple_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_compuestos_detalle_capitulo_general_id_fkey"
            columns: ["capitulo_general_id"]
            isOneToOne: false
            referencedRelation: "compras_capitulos_generales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_compuestos_detalle_linea_padre_id_fkey"
            columns: ["linea_padre_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos_compuestos_detalle"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_auditoria: {
        Row: {
          created_at: string
          datos_anteriores: Json | null
          datos_nuevos: Json | null
          id: string
          ip_address: unknown
          operacion: string
          registro_id: string
          tabla: string
          user_agent: string | null
          usuario_id: string | null
        }
        Insert: {
          created_at?: string
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          id?: string
          ip_address?: unknown
          operacion: string
          registro_id: string
          tabla: string
          user_agent?: string | null
          usuario_id?: string | null
        }
        Update: {
          created_at?: string
          datos_anteriores?: Json | null
          datos_nuevos?: Json | null
          id?: string
          ip_address?: unknown
          operacion?: string
          registro_id?: string
          tabla?: string
          user_agent?: string | null
          usuario_id?: string | null
        }
        Relationships: []
      }
      compras_capitulos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          familia_id: string
          id: string
          nombre: string
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          familia_id: string
          id?: string
          nombre: string
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          familia_id?: string
          id?: string
          nombre?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_capitulos_familia_id_fkey"
            columns: ["familia_id"]
            isOneToOne: false
            referencedRelation: "compras_familias"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_capitulos_generales: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      compras_dashboard_notas: {
        Row: {
          concepto: string
          created_at: string
          fecha: string
          finalizada: boolean
          id: string
          proveedor: string | null
          tipo: string
          updated_at: string
          urgencia: string
        }
        Insert: {
          concepto?: string
          created_at?: string
          fecha?: string
          finalizada?: boolean
          id?: string
          proveedor?: string | null
          tipo: string
          updated_at?: string
          urgencia?: string
        }
        Update: {
          concepto?: string
          created_at?: string
          fecha?: string
          finalizada?: boolean
          id?: string
          proveedor?: string | null
          tipo?: string
          updated_at?: string
          urgencia?: string
        }
        Relationships: []
      }
      compras_documentos: {
        Row: {
          clasificacion_ia: Json | null
          created_at: string
          descripcion: string | null
          entrega_id: string | null
          id: string
          nombre: string
          oferta_id: string | null
          orden_id: string | null
          partida_fase_id: string | null
          ruta_storage: string
          subido_por: string | null
          tamano_bytes: number | null
          tipo: string
          tipo_mime: string | null
        }
        Insert: {
          clasificacion_ia?: Json | null
          created_at?: string
          descripcion?: string | null
          entrega_id?: string | null
          id?: string
          nombre: string
          oferta_id?: string | null
          orden_id?: string | null
          partida_fase_id?: string | null
          ruta_storage: string
          subido_por?: string | null
          tamano_bytes?: number | null
          tipo: string
          tipo_mime?: string | null
        }
        Update: {
          clasificacion_ia?: Json | null
          created_at?: string
          descripcion?: string | null
          entrega_id?: string | null
          id?: string
          nombre?: string
          oferta_id?: string | null
          orden_id?: string | null
          partida_fase_id?: string | null
          ruta_storage?: string
          subido_por?: string | null
          tamano_bytes?: number | null
          tipo?: string
          tipo_mime?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_documentos_entrega_id_fkey"
            columns: ["entrega_id"]
            isOneToOne: false
            referencedRelation: "compras_entregas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_documentos_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "compras_ofertas_proveedor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_documentos_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "compras_ordenes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_documentos_partida_fase_id_fkey"
            columns: ["partida_fase_id"]
            isOneToOne: false
            referencedRelation: "compras_partida_fases"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_entregas: {
        Row: {
          albaran: string | null
          cantidad: number
          created_at: string
          fecha_prevista: string | null
          fecha_real: string | null
          id: string
          observaciones: string | null
          orden_linea_id: string
          registrado_por: string | null
          updated_at: string
        }
        Insert: {
          albaran?: string | null
          cantidad: number
          created_at?: string
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          observaciones?: string | null
          orden_linea_id: string
          registrado_por?: string | null
          updated_at?: string
        }
        Update: {
          albaran?: string | null
          cantidad?: number
          created_at?: string
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          observaciones?: string | null
          orden_linea_id?: string
          registrado_por?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_entregas_orden_linea_id_fkey"
            columns: ["orden_linea_id"]
            isOneToOne: false
            referencedRelation: "compras_ordenes_lineas"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_familias: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          plantilla_codigo_id: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          plantilla_codigo_id?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          plantilla_codigo_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_familias_plantilla_codigo_id_fkey"
            columns: ["plantilla_codigo_id"]
            isOneToOne: false
            referencedRelation: "compras_plantillas_codigo"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_fases: {
        Row: {
          codigo: string
          descripcion: string | null
          es_final: boolean | null
          id: string
          nombre: string
          orden: number
          requiere_documento: boolean | null
        }
        Insert: {
          codigo: string
          descripcion?: string | null
          es_final?: boolean | null
          id?: string
          nombre: string
          orden: number
          requiere_documento?: boolean | null
        }
        Update: {
          codigo?: string
          descripcion?: string | null
          es_final?: boolean | null
          id?: string
          nombre?: string
          orden?: number
          requiere_documento?: boolean | null
        }
        Relationships: []
      }
      compras_grupos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          familia_id: string | null
          id: string
          nombre: string
          orden: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          familia_id?: string | null
          id?: string
          nombre: string
          orden?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          familia_id?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_grupos_familia_id_fkey"
            columns: ["familia_id"]
            isOneToOne: false
            referencedRelation: "compras_familias"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_lineas: {
        Row: {
          articulo_id: string
          cantidad_total: number
          capitulo_codigo: string | null
          created_at: string | null
          created_by: string | null
          estado_compra: string | null
          fecha_cierre_compra: string | null
          fecha_prevista_entrega: string | null
          fecha_real_entrega: string | null
          fecha_solicitud_ofertas: string | null
          id: string
          linea_descompuesto_id: string
          plan_id: string
          precio_total: number | null
          precio_unitario: number | null
          proveedor_seleccionado_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          articulo_id: string
          cantidad_total?: number
          capitulo_codigo?: string | null
          created_at?: string | null
          created_by?: string | null
          estado_compra?: string | null
          fecha_cierre_compra?: string | null
          fecha_prevista_entrega?: string | null
          fecha_real_entrega?: string | null
          fecha_solicitud_ofertas?: string | null
          id?: string
          linea_descompuesto_id: string
          plan_id: string
          precio_total?: number | null
          precio_unitario?: number | null
          proveedor_seleccionado_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          articulo_id?: string
          cantidad_total?: number
          capitulo_codigo?: string | null
          created_at?: string | null
          created_by?: string | null
          estado_compra?: string | null
          fecha_cierre_compra?: string | null
          fecha_prevista_entrega?: string | null
          fecha_real_entrega?: string | null
          fecha_solicitud_ofertas?: string | null
          id?: string
          linea_descompuesto_id?: string
          plan_id?: string
          precio_total?: number | null
          precio_unitario?: number | null
          proveedor_seleccionado_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_lineas_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_lineas_linea_descompuesto_id_fkey"
            columns: ["linea_descompuesto_id"]
            isOneToOne: false
            referencedRelation: "descompuesto_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_lineas_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "compras_plan"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_lineas_proveedor_seleccionado_id_fkey"
            columns: ["proveedor_seleccionado_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_lineas_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_oferta_lineas: {
        Row: {
          articulo_partida_id: string
          cantidad_asignada: number
          cantidad_convertida: number | null
          created_at: string
          documento_url: string | null
          factor_conversion: number
          id: string
          notas: string | null
          oferta_id: string
          precio_total_asignado: number | null
          precio_unitario_asignado: number | null
          unidad_destino: string
          unidad_origen: string
          updated_at: string
        }
        Insert: {
          articulo_partida_id: string
          cantidad_asignada?: number
          cantidad_convertida?: number | null
          created_at?: string
          documento_url?: string | null
          factor_conversion?: number
          id?: string
          notas?: string | null
          oferta_id: string
          precio_total_asignado?: number | null
          precio_unitario_asignado?: number | null
          unidad_destino?: string
          unidad_origen?: string
          updated_at?: string
        }
        Update: {
          articulo_partida_id?: string
          cantidad_asignada?: number
          cantidad_convertida?: number | null
          created_at?: string
          documento_url?: string | null
          factor_conversion?: number
          id?: string
          notas?: string | null
          oferta_id?: string
          precio_total_asignado?: number | null
          precio_unitario_asignado?: number | null
          unidad_destino?: string
          unidad_origen?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_oferta_lineas_articulo_partida_id_fkey"
            columns: ["articulo_partida_id"]
            isOneToOne: false
            referencedRelation: "compras_articulo_partida"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_oferta_lineas_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "compras_ofertas_proveedor"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_ofertas_proveedor: {
        Row: {
          adjudicada: boolean | null
          articulo_partida_id: string
          cantidad_convertida: number | null
          cantidad_ofertada: number | null
          condiciones: string | null
          created_at: string
          datos_extraidos_ia: Json | null
          datos_ia_extraidos: Json | null
          documento_nombre: string | null
          documento_path: string | null
          documento_url: string | null
          factor_conversion: number | null
          fecha_adjudicacion: string | null
          fecha_validacion: string | null
          forma_pago: string | null
          id: string
          justificacion_ranking: string | null
          plazo_entrega_dias: number | null
          precio_total: number | null
          precio_unitario: number
          proveedor_id: string
          ranking: number | null
          ranking_manual: number | null
          unidad_oferta: string | null
          updated_at: string
          validacion_manual: boolean | null
          validado_por_id: string | null
          validez_hasta: string | null
        }
        Insert: {
          adjudicada?: boolean | null
          articulo_partida_id: string
          cantidad_convertida?: number | null
          cantidad_ofertada?: number | null
          condiciones?: string | null
          created_at?: string
          datos_extraidos_ia?: Json | null
          datos_ia_extraidos?: Json | null
          documento_nombre?: string | null
          documento_path?: string | null
          documento_url?: string | null
          factor_conversion?: number | null
          fecha_adjudicacion?: string | null
          fecha_validacion?: string | null
          forma_pago?: string | null
          id?: string
          justificacion_ranking?: string | null
          plazo_entrega_dias?: number | null
          precio_total?: number | null
          precio_unitario: number
          proveedor_id: string
          ranking?: number | null
          ranking_manual?: number | null
          unidad_oferta?: string | null
          updated_at?: string
          validacion_manual?: boolean | null
          validado_por_id?: string | null
          validez_hasta?: string | null
        }
        Update: {
          adjudicada?: boolean | null
          articulo_partida_id?: string
          cantidad_convertida?: number | null
          cantidad_ofertada?: number | null
          condiciones?: string | null
          created_at?: string
          datos_extraidos_ia?: Json | null
          datos_ia_extraidos?: Json | null
          documento_nombre?: string | null
          documento_path?: string | null
          documento_url?: string | null
          factor_conversion?: number | null
          fecha_adjudicacion?: string | null
          fecha_validacion?: string | null
          forma_pago?: string | null
          id?: string
          justificacion_ranking?: string | null
          plazo_entrega_dias?: number | null
          precio_total?: number | null
          precio_unitario?: number
          proveedor_id?: string
          ranking?: number | null
          ranking_manual?: number | null
          unidad_oferta?: string | null
          updated_at?: string
          validacion_manual?: boolean | null
          validado_por_id?: string | null
          validez_hasta?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_ofertas_proveedor_articulo_partida_id_fkey"
            columns: ["articulo_partida_id"]
            isOneToOne: false
            referencedRelation: "compras_articulo_partida"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_ofertas_proveedor_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_ofertas_proveedor_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_ordenes: {
        Row: {
          codigo: string
          condiciones_entrega: string | null
          condiciones_pago: string | null
          created_at: string
          created_by: string | null
          estado: string | null
          fecha_pedido: string
          fecha_prevista_entrega: string | null
          id: string
          importe_total: number | null
          observaciones: string | null
          proveedor_id: string
          proyecto_id: string
          updated_at: string
        }
        Insert: {
          codigo: string
          condiciones_entrega?: string | null
          condiciones_pago?: string | null
          created_at?: string
          created_by?: string | null
          estado?: string | null
          fecha_pedido?: string
          fecha_prevista_entrega?: string | null
          id?: string
          importe_total?: number | null
          observaciones?: string | null
          proveedor_id: string
          proyecto_id: string
          updated_at?: string
        }
        Update: {
          codigo?: string
          condiciones_entrega?: string | null
          condiciones_pago?: string | null
          created_at?: string
          created_by?: string | null
          estado?: string | null
          fecha_pedido?: string
          fecha_prevista_entrega?: string | null
          id?: string
          importe_total?: number | null
          observaciones?: string | null
          proveedor_id?: string
          proyecto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_ordenes_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_ordenes_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_ordenes_lineas: {
        Row: {
          articulo_partida_id: string | null
          cantidad: number
          cantidad_recibida: number | null
          created_at: string
          estado: string | null
          id: string
          oferta_proveedor_id: string | null
          orden_id: string
          precio_total: number | null
          precio_unitario: number
          updated_at: string
        }
        Insert: {
          articulo_partida_id?: string | null
          cantidad: number
          cantidad_recibida?: number | null
          created_at?: string
          estado?: string | null
          id?: string
          oferta_proveedor_id?: string | null
          orden_id: string
          precio_total?: number | null
          precio_unitario: number
          updated_at?: string
        }
        Update: {
          articulo_partida_id?: string | null
          cantidad?: number
          cantidad_recibida?: number | null
          created_at?: string
          estado?: string | null
          id?: string
          oferta_proveedor_id?: string | null
          orden_id?: string
          precio_total?: number | null
          precio_unitario?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_ordenes_lineas_articulo_partida_id_fkey"
            columns: ["articulo_partida_id"]
            isOneToOne: false
            referencedRelation: "compras_articulo_partida"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_ordenes_lineas_oferta_proveedor_id_fkey"
            columns: ["oferta_proveedor_id"]
            isOneToOne: false
            referencedRelation: "compras_ofertas_proveedor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_ordenes_lineas_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "compras_ordenes"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_partida_fases: {
        Row: {
          created_at: string
          estado: string | null
          fase_id: string
          fecha_fin: string | null
          fecha_inicio: string
          id: string
          notas: string | null
          partida_proyecto_id: string
          responsable_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          estado?: string | null
          fase_id: string
          fecha_fin?: string | null
          fecha_inicio?: string
          id?: string
          notas?: string | null
          partida_proyecto_id: string
          responsable_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          estado?: string | null
          fase_id?: string
          fecha_fin?: string | null
          fecha_inicio?: string
          id?: string
          notas?: string | null
          partida_proyecto_id?: string
          responsable_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_partida_fases_fase_id_fkey"
            columns: ["fase_id"]
            isOneToOne: false
            referencedRelation: "compras_fases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partida_fases_partida_proyecto_id_fkey"
            columns: ["partida_proyecto_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partida_fases_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_partidas_base: {
        Row: {
          activo: boolean | null
          cantidad: number | null
          capitulo_id: string | null
          codigo: string
          coste_total_calculado: number | null
          created_at: string
          descripcion: string | null
          es_obligatoria: boolean | null
          estructura_coste_id: string | null
          id: string
          margen_pct: number | null
          nombre: string
          orden: number
          precio_venta_calculado: number | null
          sistema_constructivo_id: string | null
          tipo_coste_id: string
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          cantidad?: number | null
          capitulo_id?: string | null
          codigo: string
          coste_total_calculado?: number | null
          created_at?: string
          descripcion?: string | null
          es_obligatoria?: boolean | null
          estructura_coste_id?: string | null
          id?: string
          margen_pct?: number | null
          nombre: string
          orden?: number
          precio_venta_calculado?: number | null
          sistema_constructivo_id?: string | null
          tipo_coste_id: string
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          cantidad?: number | null
          capitulo_id?: string | null
          codigo?: string
          coste_total_calculado?: number | null
          created_at?: string
          descripcion?: string | null
          es_obligatoria?: boolean | null
          estructura_coste_id?: string | null
          id?: string
          margen_pct?: number | null
          nombre?: string
          orden?: number
          precio_venta_calculado?: number | null
          sistema_constructivo_id?: string | null
          tipo_coste_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_partidas_base_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partidas_base_estructura_coste_id_fkey"
            columns: ["estructura_coste_id"]
            isOneToOne: false
            referencedRelation: "estructura_coste"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partidas_base_sistema_constructivo_id_fkey"
            columns: ["sistema_constructivo_id"]
            isOneToOne: false
            referencedRelation: "compras_sistemas_constructivos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partidas_base_tipo_coste_id_fkey"
            columns: ["tipo_coste_id"]
            isOneToOne: false
            referencedRelation: "compras_tipos_coste"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_partidas_proyecto: {
        Row: {
          activo: boolean | null
          clasificacion_portal: string | null
          created_at: string
          estado: string | null
          id: string
          notas: string | null
          orden_compra_proyecto: number
          partida_base_id: string
          prioridad: number | null
          proyecto_id: string
          updated_at: string
          urgencia: number | null
        }
        Insert: {
          activo?: boolean | null
          clasificacion_portal?: string | null
          created_at?: string
          estado?: string | null
          id?: string
          notas?: string | null
          orden_compra_proyecto?: number
          partida_base_id: string
          prioridad?: number | null
          proyecto_id: string
          updated_at?: string
          urgencia?: number | null
        }
        Update: {
          activo?: boolean | null
          clasificacion_portal?: string | null
          created_at?: string
          estado?: string | null
          id?: string
          notas?: string | null
          orden_compra_proyecto?: number
          partida_base_id?: string
          prioridad?: number | null
          proyecto_id?: string
          updated_at?: string
          urgencia?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_partidas_proyecto_partida_base_id_fkey"
            columns: ["partida_base_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_base"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_partidas_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_plan: {
        Row: {
          created_at: string | null
          estado: string | null
          fecha_generacion: string | null
          generado_automaticamente: boolean | null
          generado_por: string | null
          id: string
          notas: string | null
          proyecto_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          estado?: string | null
          fecha_generacion?: string | null
          generado_automaticamente?: boolean | null
          generado_por?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          estado?: string | null
          fecha_generacion?: string | null
          generado_automaticamente?: boolean | null
          generado_por?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_plan_generado_por_fkey"
            columns: ["generado_por"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_plan_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: true
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_plantillas_codigo: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          created_by: string | null
          descripcion: string | null
          ejemplo: string | null
          id: string
          nombre: string
          patron: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          ejemplo?: string | null
          id?: string
          nombre: string
          patron: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          ejemplo?: string | null
          id?: string
          nombre?: string
          patron?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      compras_secuencias_codigo: {
        Row: {
          id: string
          prefijo: string
          ultimo_valor: number
          updated_at: string
        }
        Insert: {
          id?: string
          prefijo: string
          ultimo_valor?: number
          updated_at?: string
        }
        Update: {
          id?: string
          prefijo?: string
          ultimo_valor?: number
          updated_at?: string
        }
        Relationships: []
      }
      compras_sistemas_constructivos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      compras_subfamilias: {
        Row: {
          activo: boolean | null
          capitulo_id: string
          codigo: string
          created_at: string
          descripcion: string | null
          grupo_id: string | null
          id: string
          nombre: string
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          capitulo_id: string
          codigo: string
          created_at?: string
          descripcion?: string | null
          grupo_id?: string | null
          id?: string
          nombre: string
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          capitulo_id?: string
          codigo?: string
          created_at?: string
          descripcion?: string | null
          grupo_id?: string | null
          id?: string
          nombre?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compras_subfamilias_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "compras_capitulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_subfamilias_grupo_id_fkey"
            columns: ["grupo_id"]
            isOneToOne: false
            referencedRelation: "compras_grupos"
            referencedColumns: ["id"]
          },
        ]
      }
      compras_tipos_coste: {
        Row: {
          codigo: string
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
        }
        Insert: {
          codigo: string
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
        }
        Update: {
          codigo?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
        }
        Relationships: []
      }
      conceptos_coste: {
        Row: {
          activo: boolean | null
          aplica_a_modelos: boolean | null
          aplica_a_proyectos: boolean | null
          base_calculo: string | null
          categoria_id: string
          codigo: string
          created_at: string | null
          descripcion: string | null
          formula: string | null
          id: string
          nombre: string
          notas: string | null
          orden: number | null
          porcentaje: number | null
          precio_unitario: number | null
          tipo_calculo: string
          updated_at: string | null
          valor_fijo: number | null
        }
        Insert: {
          activo?: boolean | null
          aplica_a_modelos?: boolean | null
          aplica_a_proyectos?: boolean | null
          base_calculo?: string | null
          categoria_id: string
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          formula?: string | null
          id?: string
          nombre: string
          notas?: string | null
          orden?: number | null
          porcentaje?: number | null
          precio_unitario?: number | null
          tipo_calculo?: string
          updated_at?: string | null
          valor_fijo?: number | null
        }
        Update: {
          activo?: boolean | null
          aplica_a_modelos?: boolean | null
          aplica_a_proyectos?: boolean | null
          base_calculo?: string | null
          categoria_id?: string
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          formula?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          orden?: number | null
          porcentaje?: number | null
          precio_unitario?: number | null
          tipo_calculo?: string
          updated_at?: string | null
          valor_fijo?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "conceptos_coste_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_coste"
            referencedColumns: ["id"]
          },
        ]
      }
      config_carpetas_fase: {
        Row: {
          activo: boolean | null
          codigo_carpeta: string
          created_at: string | null
          descripcion: string | null
          fase_abante: string
          id: string
          nombre_carpeta: string
          orden: number | null
        }
        Insert: {
          activo?: boolean | null
          codigo_carpeta: string
          created_at?: string | null
          descripcion?: string | null
          fase_abante: string
          id?: string
          nombre_carpeta: string
          orden?: number | null
        }
        Update: {
          activo?: boolean | null
          codigo_carpeta?: string
          created_at?: string | null
          descripcion?: string | null
          fase_abante?: string
          id?: string
          nombre_carpeta?: string
          orden?: number | null
        }
        Relationships: []
      }
      configuracion: {
        Row: {
          clave: string
          descripcion: string | null
          editable: boolean | null
          id: string
          updated_at: string
          valor: Json
        }
        Insert: {
          clave: string
          descripcion?: string | null
          editable?: boolean | null
          id?: string
          updated_at?: string
          valor: Json
        }
        Update: {
          clave?: string
          descripcion?: string | null
          editable?: boolean | null
          id?: string
          updated_at?: string
          valor?: Json
        }
        Relationships: []
      }
      configuracion_codigos: {
        Row: {
          created_at: string
          id: string
          plantilla_id: string | null
          prefijo: string | null
          tipo_entidad: string
          ultimo_secuencial: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          plantilla_id?: string | null
          prefijo?: string | null
          tipo_entidad: string
          ultimo_secuencial?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          plantilla_id?: string | null
          prefijo?: string | null
          tipo_entidad?: string
          ultimo_secuencial?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "configuracion_codigos_plantilla_id_fkey"
            columns: ["plantilla_id"]
            isOneToOne: false
            referencedRelation: "compras_plantillas_codigo"
            referencedColumns: ["id"]
          },
        ]
      }
      configuracion_dietas: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          id: string
          importe_dia: number
          incluye_alojamiento: boolean | null
          incluye_transporte: boolean | null
          km_minimo: number | null
          nombre: string
          tipo: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          id?: string
          importe_dia?: number
          incluye_alojamiento?: boolean | null
          incluye_transporte?: boolean | null
          km_minimo?: number | null
          nombre: string
          tipo: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          id?: string
          importe_dia?: number
          incluye_alojamiento?: boolean | null
          incluye_transporte?: boolean | null
          km_minimo?: number | null
          nombre?: string
          tipo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      configuracion_email: {
        Row: {
          clave: string
          created_at: string
          id: string
          updated_at: string
          valor: string | null
        }
        Insert: {
          clave: string
          created_at?: string
          id?: string
          updated_at?: string
          valor?: string | null
        }
        Update: {
          clave?: string
          created_at?: string
          id?: string
          updated_at?: string
          valor?: string | null
        }
        Relationships: []
      }
      configuraciones_vivienda: {
        Row: {
          banos_configurados: number | null
          cliente_id: string | null
          codigo: string
          codigo_postal: string | null
          created_at: string
          cumple_cte: boolean | null
          cumple_urbanismo: boolean | null
          estado: string
          habitaciones_configuradas: number | null
          id: string
          informe_urbanistico_id: string | null
          modelo_id: string | null
          nombre_configuracion: string | null
          notas_cliente: string | null
          notas_internas: string | null
          oferta_id: string | null
          opciones_seleccionadas: Json
          plantas_configuradas: number | null
          precio_base: number
          precio_m2_calculado: number | null
          precio_opciones: number
          precio_total: number
          proyecto_id: string | null
          superficie_configurada_m2: number | null
          updated_at: string
          user_id: string | null
          validacion_errores: Json | null
          zona_geografica: string | null
        }
        Insert: {
          banos_configurados?: number | null
          cliente_id?: string | null
          codigo: string
          codigo_postal?: string | null
          created_at?: string
          cumple_cte?: boolean | null
          cumple_urbanismo?: boolean | null
          estado?: string
          habitaciones_configuradas?: number | null
          id?: string
          informe_urbanistico_id?: string | null
          modelo_id?: string | null
          nombre_configuracion?: string | null
          notas_cliente?: string | null
          notas_internas?: string | null
          oferta_id?: string | null
          opciones_seleccionadas?: Json
          plantas_configuradas?: number | null
          precio_base?: number
          precio_m2_calculado?: number | null
          precio_opciones?: number
          precio_total?: number
          proyecto_id?: string | null
          superficie_configurada_m2?: number | null
          updated_at?: string
          user_id?: string | null
          validacion_errores?: Json | null
          zona_geografica?: string | null
        }
        Update: {
          banos_configurados?: number | null
          cliente_id?: string | null
          codigo?: string
          codigo_postal?: string | null
          created_at?: string
          cumple_cte?: boolean | null
          cumple_urbanismo?: boolean | null
          estado?: string
          habitaciones_configuradas?: number | null
          id?: string
          informe_urbanistico_id?: string | null
          modelo_id?: string | null
          nombre_configuracion?: string | null
          notas_cliente?: string | null
          notas_internas?: string | null
          oferta_id?: string | null
          opciones_seleccionadas?: Json
          plantas_configuradas?: number | null
          precio_base?: number
          precio_m2_calculado?: number | null
          precio_opciones?: number
          precio_total?: number
          proyecto_id?: string | null
          superficie_configurada_m2?: number | null
          updated_at?: string
          user_id?: string | null
          validacion_errores?: Json | null
          zona_geografica?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "configuraciones_vivienda_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "configuraciones_vivienda_informe_urbanistico_id_fkey"
            columns: ["informe_urbanistico_id"]
            isOneToOne: false
            referencedRelation: "informes_urbanisticos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "configuraciones_vivienda_modelo_id_fkey"
            columns: ["modelo_id"]
            isOneToOne: false
            referencedRelation: "modelos_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "configuraciones_vivienda_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "configuraciones_vivienda_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      consultas_cte: {
        Row: {
          chunks_utilizados: string[] | null
          confianza: number | null
          configuracion_id: string | null
          contexto: Json | null
          created_at: string
          documentos_citados: string[] | null
          id: string
          modelo_utilizado: string | null
          pregunta: string
          proyecto_id: string | null
          respuesta: string | null
          tiempo_respuesta_ms: number | null
          tokens_entrada: number | null
          tokens_salida: number | null
          user_id: string | null
        }
        Insert: {
          chunks_utilizados?: string[] | null
          confianza?: number | null
          configuracion_id?: string | null
          contexto?: Json | null
          created_at?: string
          documentos_citados?: string[] | null
          id?: string
          modelo_utilizado?: string | null
          pregunta: string
          proyecto_id?: string | null
          respuesta?: string | null
          tiempo_respuesta_ms?: number | null
          tokens_entrada?: number | null
          tokens_salida?: number | null
          user_id?: string | null
        }
        Update: {
          chunks_utilizados?: string[] | null
          confianza?: number | null
          configuracion_id?: string | null
          contexto?: Json | null
          created_at?: string
          documentos_citados?: string[] | null
          id?: string
          modelo_utilizado?: string | null
          pregunta?: string
          proyecto_id?: string | null
          respuesta?: string | null
          tiempo_respuesta_ms?: number | null
          tokens_entrada?: number | null
          tokens_salida?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consultas_cte_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultas_cte_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      contactos_cliente: {
        Row: {
          cargo: string | null
          cliente_id: string
          created_at: string | null
          departamento: string | null
          email: string | null
          empresa_externa: string | null
          es_principal: boolean | null
          id: string
          nombre: string
          notas: string | null
          proyecto_id: string | null
          telefono: string | null
          telefono_alt: string | null
          tipo_contacto: string | null
          updated_at: string | null
        }
        Insert: {
          cargo?: string | null
          cliente_id: string
          created_at?: string | null
          departamento?: string | null
          email?: string | null
          empresa_externa?: string | null
          es_principal?: boolean | null
          id?: string
          nombre: string
          notas?: string | null
          proyecto_id?: string | null
          telefono?: string | null
          telefono_alt?: string | null
          tipo_contacto?: string | null
          updated_at?: string | null
        }
        Update: {
          cargo?: string | null
          cliente_id?: string
          created_at?: string | null
          departamento?: string | null
          email?: string | null
          empresa_externa?: string | null
          es_principal?: boolean | null
          id?: string
          nombre?: string
          notas?: string | null
          proyecto_id?: string | null
          telefono?: string | null
          telefono_alt?: string | null
          tipo_contacto?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contactos_cliente_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contactos_cliente_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      contactos_proyecto: {
        Row: {
          cargo: string | null
          created_at: string | null
          email: string | null
          es_principal: boolean | null
          foto_url: string | null
          id: string
          nombre: string
          orden: number | null
          proyecto_id: string
          rol: string | null
          telefono: string | null
          telefono_secundario: string | null
          tipo: string
          updated_at: string | null
          visible_portal: boolean | null
        }
        Insert: {
          cargo?: string | null
          created_at?: string | null
          email?: string | null
          es_principal?: boolean | null
          foto_url?: string | null
          id?: string
          nombre: string
          orden?: number | null
          proyecto_id: string
          rol?: string | null
          telefono?: string | null
          telefono_secundario?: string | null
          tipo: string
          updated_at?: string | null
          visible_portal?: boolean | null
        }
        Update: {
          cargo?: string | null
          created_at?: string | null
          email?: string | null
          es_principal?: boolean | null
          foto_url?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          proyecto_id?: string
          rol?: string | null
          telefono?: string | null
          telefono_secundario?: string | null
          tipo?: string
          updated_at?: string | null
          visible_portal?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "contactos_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      contratos: {
        Row: {
          aceptado_por_id: string | null
          cliente_id: string | null
          condiciones_pago: string | null
          created_at: string
          email_destino: string | null
          enviado_por_id: string | null
          envio_oferta_id: string | null
          estado: Database["public"]["Enums"]["estado_contrato"]
          fecha_aceptacion: string | null
          fecha_envio: string | null
          fecha_rechazo: string | null
          gastos_estructurales: number | null
          id: string
          importe_total: number | null
          lugar_entrega: string | null
          margen_aplicado: number | null
          motivo_rechazo: string | null
          notas: string | null
          numero_contrato: string
          oferta_id: string
          pdf_generado_at: string | null
          pdf_storage_path: string | null
          plazo_entrega: string | null
          proyecto_id: string
          subtotal: number | null
          total_contrato: number | null
          total_mano_obra: number | null
          total_materiales: number | null
          total_proveedores: number | null
          updated_at: string
          validez_dias: number | null
          version: number | null
        }
        Insert: {
          aceptado_por_id?: string | null
          cliente_id?: string | null
          condiciones_pago?: string | null
          created_at?: string
          email_destino?: string | null
          enviado_por_id?: string | null
          envio_oferta_id?: string | null
          estado?: Database["public"]["Enums"]["estado_contrato"]
          fecha_aceptacion?: string | null
          fecha_envio?: string | null
          fecha_rechazo?: string | null
          gastos_estructurales?: number | null
          id?: string
          importe_total?: number | null
          lugar_entrega?: string | null
          margen_aplicado?: number | null
          motivo_rechazo?: string | null
          notas?: string | null
          numero_contrato: string
          oferta_id: string
          pdf_generado_at?: string | null
          pdf_storage_path?: string | null
          plazo_entrega?: string | null
          proyecto_id: string
          subtotal?: number | null
          total_contrato?: number | null
          total_mano_obra?: number | null
          total_materiales?: number | null
          total_proveedores?: number | null
          updated_at?: string
          validez_dias?: number | null
          version?: number | null
        }
        Update: {
          aceptado_por_id?: string | null
          cliente_id?: string | null
          condiciones_pago?: string | null
          created_at?: string
          email_destino?: string | null
          enviado_por_id?: string | null
          envio_oferta_id?: string | null
          estado?: Database["public"]["Enums"]["estado_contrato"]
          fecha_aceptacion?: string | null
          fecha_envio?: string | null
          fecha_rechazo?: string | null
          gastos_estructurales?: number | null
          id?: string
          importe_total?: number | null
          lugar_entrega?: string | null
          margen_aplicado?: number | null
          motivo_rechazo?: string | null
          notas?: string | null
          numero_contrato?: string
          oferta_id?: string
          pdf_generado_at?: string | null
          pdf_storage_path?: string | null
          plazo_entrega?: string | null
          proyecto_id?: string
          subtotal?: number | null
          total_contrato?: number | null
          total_mano_obra?: number | null
          total_materiales?: number | null
          total_proveedores?: number | null
          updated_at?: string
          validez_dias?: number | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "contratos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contratos_envio_oferta_id_fkey"
            columns: ["envio_oferta_id"]
            isOneToOne: false
            referencedRelation: "envios_oferta"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contratos_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contratos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      conversaciones_configurador: {
        Row: {
          advertencias: Json | null
          configuracion_id: string | null
          created_at: string
          fuentes_internas: Json | null
          id: string
          mensaje: string
          rol: string
        }
        Insert: {
          advertencias?: Json | null
          configuracion_id?: string | null
          created_at?: string
          fuentes_internas?: Json | null
          id?: string
          mensaje: string
          rol: string
        }
        Update: {
          advertencias?: Json | null
          configuracion_id?: string | null
          created_at?: string
          fuentes_internas?: Json | null
          id?: string
          mensaje?: string
          rol?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversaciones_configurador_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
        ]
      }
      costes_proyecto: {
        Row: {
          concepto: string
          coste_estimado: number | null
          coste_real: number | null
          created_at: string
          documento_referencia: string | null
          fase: string | null
          fecha_imputacion: string | null
          id: string
          notas: string | null
          proveedor_id: string | null
          proyecto_id: string
          subcontrata_id: string | null
          tipo: Database["public"]["Enums"]["tipo_coste"]
          updated_at: string
        }
        Insert: {
          concepto: string
          coste_estimado?: number | null
          coste_real?: number | null
          created_at?: string
          documento_referencia?: string | null
          fase?: string | null
          fecha_imputacion?: string | null
          id?: string
          notas?: string | null
          proveedor_id?: string | null
          proyecto_id: string
          subcontrata_id?: string | null
          tipo: Database["public"]["Enums"]["tipo_coste"]
          updated_at?: string
        }
        Update: {
          concepto?: string
          coste_estimado?: number | null
          coste_real?: number | null
          created_at?: string
          documento_referencia?: string | null
          fase?: string | null
          fecha_imputacion?: string | null
          id?: string
          notas?: string | null
          proveedor_id?: string | null
          proyecto_id?: string
          subcontrata_id?: string | null
          tipo?: Database["public"]["Enums"]["tipo_coste"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "costes_proyecto_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "costes_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "costes_proyecto_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      costos_iniciales_edificios: {
        Row: {
          costo_inicial_id: string
          created_at: string
          edificio_id: string
          id: string
        }
        Insert: {
          costo_inicial_id: string
          created_at?: string
          edificio_id: string
          id?: string
        }
        Update: {
          costo_inicial_id?: string
          created_at?: string
          edificio_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "costos_iniciales_edificios_costo_inicial_id_fkey"
            columns: ["costo_inicial_id"]
            isOneToOne: false
            referencedRelation: "costos_iniciales_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "costos_iniciales_edificios_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      costos_iniciales_proyecto: {
        Row: {
          cantidad: number | null
          categoria: string
          codigo: string
          created_at: string
          descripcion: string
          desviacion_contratado: number | null
          desviacion_estimado: number | null
          edificio_id: string | null
          id: string
          importe_contratado: number
          importe_estimado: number
          importe_real: number
          notas: string | null
          partida_id: string | null
          precio_unitario: number | null
          proyecto_id: string
          tipo_proporcional: string | null
          unidad: string | null
          updated_at: string
        }
        Insert: {
          cantidad?: number | null
          categoria?: string
          codigo: string
          created_at?: string
          descripcion: string
          desviacion_contratado?: number | null
          desviacion_estimado?: number | null
          edificio_id?: string | null
          id?: string
          importe_contratado?: number
          importe_estimado?: number
          importe_real?: number
          notas?: string | null
          partida_id?: string | null
          precio_unitario?: number | null
          proyecto_id: string
          tipo_proporcional?: string | null
          unidad?: string | null
          updated_at?: string
        }
        Update: {
          cantidad?: number | null
          categoria?: string
          codigo?: string
          created_at?: string
          descripcion?: string
          desviacion_contratado?: number | null
          desviacion_estimado?: number | null
          edificio_id?: string | null
          id?: string
          importe_contratado?: number
          importe_estimado?: number
          importe_real?: number
          notas?: string | null
          partida_id?: string | null
          precio_unitario?: number | null
          proyecto_id?: string
          tipo_proporcional?: string | null
          unidad?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "costos_iniciales_proyecto_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "costos_iniciales_proyecto_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: false
            referencedRelation: "partidas_plan_compras"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "costos_iniciales_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_acciones: {
        Row: {
          activo: boolean
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          tabla_referencia: string | null
          tipo: string
        }
        Insert: {
          activo?: boolean
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          tabla_referencia?: string | null
          tipo?: string
        }
        Update: {
          activo?: boolean
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          tabla_referencia?: string | null
          tipo?: string
        }
        Relationships: []
      }
      cronograma_bloques: {
        Row: {
          bloque_padre_id: string | null
          campo_referencia: string | null
          catalogo_id: string | null
          codigo: string
          created_at: string
          departamento_id: string
          descripcion: string | null
          es_paralelo: boolean
          escenario_id: string
          id: string
          nombre: string
          posicion_y: number
          tabla_referencia: string | null
          updated_at: string
        }
        Insert: {
          bloque_padre_id?: string | null
          campo_referencia?: string | null
          catalogo_id?: string | null
          codigo: string
          created_at?: string
          departamento_id: string
          descripcion?: string | null
          es_paralelo?: boolean
          escenario_id: string
          id?: string
          nombre: string
          posicion_y?: number
          tabla_referencia?: string | null
          updated_at?: string
        }
        Update: {
          bloque_padre_id?: string | null
          campo_referencia?: string | null
          catalogo_id?: string | null
          codigo?: string
          created_at?: string
          departamento_id?: string
          descripcion?: string | null
          es_paralelo?: boolean
          escenario_id?: string
          id?: string
          nombre?: string
          posicion_y?: number
          tabla_referencia?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_bloques_bloque_padre_id_fkey"
            columns: ["bloque_padre_id"]
            isOneToOne: false
            referencedRelation: "cronograma_bloques"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_bloques_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "cronograma_departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_bloques_escenario_id_fkey"
            columns: ["escenario_id"]
            isOneToOne: false
            referencedRelation: "cronograma_escenarios"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_departamentos: {
        Row: {
          codigo: string
          color: string
          created_at: string
          icono: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          codigo: string
          color?: string
          created_at?: string
          icono?: string | null
          id?: string
          nombre: string
          orden: number
        }
        Update: {
          codigo?: string
          color?: string
          created_at?: string
          icono?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      cronograma_dependencias: {
        Row: {
          accion_requerida_id: string | null
          bloque_destino_id: string
          bloque_origen_id: string
          created_at: string
          descripcion: string | null
          escenario_id: string
          id: string
          tipo: Database["public"]["Enums"]["tipo_dependencia_cronograma"]
        }
        Insert: {
          accion_requerida_id?: string | null
          bloque_destino_id: string
          bloque_origen_id: string
          created_at?: string
          descripcion?: string | null
          escenario_id: string
          id?: string
          tipo?: Database["public"]["Enums"]["tipo_dependencia_cronograma"]
        }
        Update: {
          accion_requerida_id?: string | null
          bloque_destino_id?: string
          bloque_origen_id?: string
          created_at?: string
          descripcion?: string | null
          escenario_id?: string
          id?: string
          tipo?: Database["public"]["Enums"]["tipo_dependencia_cronograma"]
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_dependencias_accion_requerida_id_fkey"
            columns: ["accion_requerida_id"]
            isOneToOne: false
            referencedRelation: "cronograma_acciones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_dependencias_bloque_destino_id_fkey"
            columns: ["bloque_destino_id"]
            isOneToOne: false
            referencedRelation: "cronograma_bloques"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_dependencias_bloque_origen_id_fkey"
            columns: ["bloque_origen_id"]
            isOneToOne: false
            referencedRelation: "cronograma_bloques"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_dependencias_escenario_id_fkey"
            columns: ["escenario_id"]
            isOneToOne: false
            referencedRelation: "cronograma_escenarios"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_edificio: {
        Row: {
          created_at: string | null
          edificio_id: string
          estado: string | null
          fase_codigo: string
          fase_nombre: string
          fase_orden: number
          fecha_fin_planificada: string | null
          fecha_fin_real: string | null
          fecha_inicio_planificada: string | null
          fecha_inicio_real: string | null
          id: string
          notas: string | null
          progreso: number | null
          responsable_abante_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          edificio_id: string
          estado?: string | null
          fase_codigo: string
          fase_nombre: string
          fase_orden: number
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          id?: string
          notas?: string | null
          progreso?: number | null
          responsable_abante_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          edificio_id?: string
          estado?: string | null
          fase_codigo?: string
          fase_nombre?: string
          fase_orden?: number
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          id?: string
          notas?: string | null
          progreso?: number | null
          responsable_abante_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_edificio_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_edificio_responsable_abante_id_fkey"
            columns: ["responsable_abante_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_escenarios: {
        Row: {
          activo: boolean
          codigo: string
          created_at: string
          created_by: string | null
          descripcion: string | null
          id: string
          nombre: string
          tipologia_proyecto_id: string | null
          updated_at: string
          version: number
        }
        Insert: {
          activo?: boolean
          codigo: string
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          tipologia_proyecto_id?: string | null
          updated_at?: string
          version?: number
        }
        Update: {
          activo?: boolean
          codigo?: string
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          tipologia_proyecto_id?: string | null
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_escenarios_tipologia_proyecto_id_fkey"
            columns: ["tipologia_proyecto_id"]
            isOneToOne: false
            referencedRelation: "catalogo_tipologias_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_proyecto_acciones: {
        Row: {
          accion_id: string
          bloque_proyecto_id: string
          completada: boolean
          completado_por_id: string | null
          created_at: string
          datos: Json | null
          documento_id: string | null
          fecha_completado: string | null
          id: string
          instancia_id: string
          updated_at: string
        }
        Insert: {
          accion_id: string
          bloque_proyecto_id: string
          completada?: boolean
          completado_por_id?: string | null
          created_at?: string
          datos?: Json | null
          documento_id?: string | null
          fecha_completado?: string | null
          id?: string
          instancia_id: string
          updated_at?: string
        }
        Update: {
          accion_id?: string
          bloque_proyecto_id?: string
          completada?: boolean
          completado_por_id?: string | null
          created_at?: string
          datos?: Json | null
          documento_id?: string | null
          fecha_completado?: string | null
          id?: string
          instancia_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_proyecto_acciones_accion_id_fkey"
            columns: ["accion_id"]
            isOneToOne: false
            referencedRelation: "cronograma_acciones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_acciones_bloque_proyecto_id_fkey"
            columns: ["bloque_proyecto_id"]
            isOneToOne: false
            referencedRelation: "cronograma_proyecto_bloques"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_acciones_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_acciones_instancia_id_fkey"
            columns: ["instancia_id"]
            isOneToOne: false
            referencedRelation: "cronograma_proyecto_instancia"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_proyecto_bloques: {
        Row: {
          bloque_origen_id: string
          bloqueo_accion_id: string | null
          bloqueo_motivo: string | null
          completado_por_id: string | null
          created_at: string
          datos_ejecucion: Json | null
          departamento_id: string
          estado: Database["public"]["Enums"]["estado_bloque_cronograma"]
          fecha_fin: string | null
          fecha_inicio: string | null
          id: string
          instancia_id: string
          notas: string | null
          progreso: number
          updated_at: string
        }
        Insert: {
          bloque_origen_id: string
          bloqueo_accion_id?: string | null
          bloqueo_motivo?: string | null
          completado_por_id?: string | null
          created_at?: string
          datos_ejecucion?: Json | null
          departamento_id: string
          estado?: Database["public"]["Enums"]["estado_bloque_cronograma"]
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          instancia_id: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Update: {
          bloque_origen_id?: string
          bloqueo_accion_id?: string | null
          bloqueo_motivo?: string | null
          completado_por_id?: string | null
          created_at?: string
          datos_ejecucion?: Json | null
          departamento_id?: string
          estado?: Database["public"]["Enums"]["estado_bloque_cronograma"]
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          instancia_id?: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_proyecto_bloques_bloque_origen_id_fkey"
            columns: ["bloque_origen_id"]
            isOneToOne: false
            referencedRelation: "cronograma_bloques"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_bloques_bloqueo_accion_id_fkey"
            columns: ["bloqueo_accion_id"]
            isOneToOne: false
            referencedRelation: "cronograma_acciones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_bloques_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "cronograma_departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_bloques_instancia_id_fkey"
            columns: ["instancia_id"]
            isOneToOne: false
            referencedRelation: "cronograma_proyecto_instancia"
            referencedColumns: ["id"]
          },
        ]
      }
      cronograma_proyecto_instancia: {
        Row: {
          created_at: string
          escenario_id: string
          estado: string
          id: string
          progreso_global: number
          proyecto_id: string
          updated_at: string
          version_escenario: number
        }
        Insert: {
          created_at?: string
          escenario_id: string
          estado?: string
          id?: string
          progreso_global?: number
          proyecto_id: string
          updated_at?: string
          version_escenario: number
        }
        Update: {
          created_at?: string
          escenario_id?: string
          estado?: string
          id?: string
          progreso_global?: number
          proyecto_id?: string
          updated_at?: string
          version_escenario?: number
        }
        Relationships: [
          {
            foreignKeyName: "cronograma_proyecto_instancia_escenario_id_fkey"
            columns: ["escenario_id"]
            isOneToOne: false
            referencedRelation: "cronograma_escenarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cronograma_proyecto_instancia_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: true
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      cuentas_correo: {
        Row: {
          activo: boolean | null
          created_at: string
          email: string
          firma_html: string | null
          id: string
          nombre: string
          reglas: Json | null
          trabajador_id: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          created_at?: string
          email: string
          firma_html?: string | null
          id?: string
          nombre: string
          reglas?: Json | null
          trabajador_id?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          created_at?: string
          email?: string
          firma_html?: string | null
          id?: string
          nombre?: string
          reglas?: Json | null
          trabajador_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cuentas_correo_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      cursos_prl_trabajadores: {
        Row: {
          certificado_url: string | null
          created_at: string
          entidad_formadora: string | null
          estado: string | null
          fecha_caducidad: string | null
          fecha_realizacion: string | null
          horas: number | null
          id: string
          nombre_curso: string
          tipo: string | null
          trabajador_id: string
          updated_at: string
        }
        Insert: {
          certificado_url?: string | null
          created_at?: string
          entidad_formadora?: string | null
          estado?: string | null
          fecha_caducidad?: string | null
          fecha_realizacion?: string | null
          horas?: number | null
          id?: string
          nombre_curso: string
          tipo?: string | null
          trabajador_id: string
          updated_at?: string
        }
        Update: {
          certificado_url?: string | null
          created_at?: string
          entidad_formadora?: string | null
          estado?: string | null
          fecha_caducidad?: string | null
          fecha_realizacion?: string | null
          horas?: number | null
          id?: string
          nombre_curso?: string
          tipo?: string | null
          trabajador_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cursos_prl_trabajadores_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      datos_empresa: {
        Row: {
          cif: string | null
          codigo_postal: string | null
          created_at: string
          direccion: string | null
          email: string | null
          id: string
          localidad: string | null
          logo_url: string | null
          nombre: string
          notas: string | null
          provincia: string | null
          telefono: string | null
          updated_at: string
          web: string | null
        }
        Insert: {
          cif?: string | null
          codigo_postal?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          id?: string
          localidad?: string | null
          logo_url?: string | null
          nombre: string
          notas?: string | null
          provincia?: string | null
          telefono?: string | null
          updated_at?: string
          web?: string | null
        }
        Update: {
          cif?: string | null
          codigo_postal?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          id?: string
          localidad?: string | null
          logo_url?: string | null
          nombre?: string
          notas?: string | null
          provincia?: string | null
          telefono?: string | null
          updated_at?: string
          web?: string | null
        }
        Relationships: []
      }
      decisiones: {
        Row: {
          alternativas_evaluadas: Json | null
          aprobado_por_id: string | null
          bloqueo_id: string | null
          codigo: string
          created_at: string
          decidido_por_id: string | null
          decision_tomada: string
          descripcion: string | null
          fecha_aprobacion: string | null
          fecha_decision: string
          fecha_implementacion: string | null
          id: string
          impacto_coste: number | null
          impacto_plazo: number | null
          implementada: boolean | null
          justificacion: string | null
          notas: string | null
          proyecto_id: string
          riesgos_asumidos: Json | null
          situacion: string
          titulo: string
        }
        Insert: {
          alternativas_evaluadas?: Json | null
          aprobado_por_id?: string | null
          bloqueo_id?: string | null
          codigo: string
          created_at?: string
          decidido_por_id?: string | null
          decision_tomada: string
          descripcion?: string | null
          fecha_aprobacion?: string | null
          fecha_decision?: string
          fecha_implementacion?: string | null
          id?: string
          impacto_coste?: number | null
          impacto_plazo?: number | null
          implementada?: boolean | null
          justificacion?: string | null
          notas?: string | null
          proyecto_id: string
          riesgos_asumidos?: Json | null
          situacion: string
          titulo: string
        }
        Update: {
          alternativas_evaluadas?: Json | null
          aprobado_por_id?: string | null
          bloqueo_id?: string | null
          codigo?: string
          created_at?: string
          decidido_por_id?: string | null
          decision_tomada?: string
          descripcion?: string | null
          fecha_aprobacion?: string | null
          fecha_decision?: string
          fecha_implementacion?: string | null
          id?: string
          impacto_coste?: number | null
          impacto_plazo?: number | null
          implementada?: boolean | null
          justificacion?: string | null
          notas?: string | null
          proyecto_id?: string
          riesgos_asumidos?: Json | null
          situacion?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "decisiones_aprobado_por_id_fkey"
            columns: ["aprobado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decisiones_bloqueo_id_fkey"
            columns: ["bloqueo_id"]
            isOneToOne: false
            referencedRelation: "bloqueos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decisiones_decidido_por_id_fkey"
            columns: ["decidido_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decisiones_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      definiciones_cliente: {
        Row: {
          bloquea_avance: boolean | null
          categoria: string | null
          codigo: string
          created_at: string | null
          cronograma_id: string | null
          descripcion: string | null
          documento_referencia_url: string | null
          documento_respuesta_url: string | null
          edificio_id: string | null
          especificaciones_tecnicas: string | null
          estado: string | null
          fase_afectada: string | null
          fecha_aprobacion: string | null
          fecha_limite: string | null
          fecha_respuesta: string | null
          fecha_solicitud: string | null
          id: string
          impacta_compras: boolean | null
          impacta_produccion: boolean | null
          nombre: string
          prioridad: string | null
          proyecto_id: string
          respondido_por_email: string | null
          respondido_por_nombre: string | null
          respuesta_cliente: string | null
          solicitado_por_id: string | null
          updated_at: string | null
        }
        Insert: {
          bloquea_avance?: boolean | null
          categoria?: string | null
          codigo: string
          created_at?: string | null
          cronograma_id?: string | null
          descripcion?: string | null
          documento_referencia_url?: string | null
          documento_respuesta_url?: string | null
          edificio_id?: string | null
          especificaciones_tecnicas?: string | null
          estado?: string | null
          fase_afectada?: string | null
          fecha_aprobacion?: string | null
          fecha_limite?: string | null
          fecha_respuesta?: string | null
          fecha_solicitud?: string | null
          id?: string
          impacta_compras?: boolean | null
          impacta_produccion?: boolean | null
          nombre: string
          prioridad?: string | null
          proyecto_id: string
          respondido_por_email?: string | null
          respondido_por_nombre?: string | null
          respuesta_cliente?: string | null
          solicitado_por_id?: string | null
          updated_at?: string | null
        }
        Update: {
          bloquea_avance?: boolean | null
          categoria?: string | null
          codigo?: string
          created_at?: string | null
          cronograma_id?: string | null
          descripcion?: string | null
          documento_referencia_url?: string | null
          documento_respuesta_url?: string | null
          edificio_id?: string | null
          especificaciones_tecnicas?: string | null
          estado?: string | null
          fase_afectada?: string | null
          fecha_aprobacion?: string | null
          fecha_limite?: string | null
          fecha_respuesta?: string | null
          fecha_solicitud?: string | null
          id?: string
          impacta_compras?: boolean | null
          impacta_produccion?: boolean | null
          nombre?: string
          prioridad?: string | null
          proyecto_id?: string
          respondido_por_email?: string | null
          respondido_por_nombre?: string | null
          respuesta_cliente?: string | null
          solicitado_por_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "definiciones_cliente_cronograma_id_fkey"
            columns: ["cronograma_id"]
            isOneToOne: false
            referencedRelation: "cronograma_edificio"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "definiciones_cliente_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "definiciones_cliente_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "definiciones_cliente_solicitado_por_id_fkey"
            columns: ["solicitado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      departamentos: {
        Row: {
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          sede: string
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          sede?: string
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          sede?: string
          updated_at?: string
        }
        Relationships: []
      }
      departamentos_permisos: {
        Row: {
          created_at: string
          departamento: string
          descripcion: string | null
          id: string
          nombre_mostrar: string
          puede_borrar: boolean
          puede_crear: boolean
          puede_editar: boolean
          secciones_visibles: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          departamento: string
          descripcion?: string | null
          id?: string
          nombre_mostrar: string
          puede_borrar?: boolean
          puede_crear?: boolean
          puede_editar?: boolean
          secciones_visibles?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          departamento?: string
          descripcion?: string | null
          id?: string
          nombre_mostrar?: string
          puede_borrar?: boolean
          puede_crear?: boolean
          puede_editar?: boolean
          secciones_visibles?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      dependencias_operativas: {
        Row: {
          created_at: string | null
          entidad_destino_id: string
          entidad_destino_tipo: string
          entidad_origen_id: string
          entidad_origen_tipo: string
          es_estricta: boolean | null
          estado: string | null
          fecha_cumplimiento: string | null
          id: string
          notas: string | null
          proyecto_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          entidad_destino_id: string
          entidad_destino_tipo: string
          entidad_origen_id: string
          entidad_origen_tipo: string
          es_estricta?: boolean | null
          estado?: string | null
          fecha_cumplimiento?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          entidad_destino_id?: string
          entidad_destino_tipo?: string
          entidad_origen_id?: string
          entidad_origen_tipo?: string
          es_estricta?: boolean | null
          estado?: string | null
          fecha_cumplimiento?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dependencias_operativas_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      descompuesto_proyecto: {
        Row: {
          articulo_id: string
          cantidad: number
          capitulo_codigo: string | null
          capitulo_nombre: string | null
          created_at: string | null
          created_by: string | null
          edificio_id: string | null
          estado_linea_codigo: string | null
          id: string
          notas: string | null
          precio_total: number | null
          precio_unitario: number
          proyecto_id: string
          tipo_articulo: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          articulo_id: string
          cantidad?: number
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          created_at?: string | null
          created_by?: string | null
          edificio_id?: string | null
          estado_linea_codigo?: string | null
          id?: string
          notas?: string | null
          precio_total?: number | null
          precio_unitario?: number
          proyecto_id: string
          tipo_articulo?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          articulo_id?: string
          cantidad?: number
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          created_at?: string | null
          created_by?: string | null
          edificio_id?: string | null
          estado_linea_codigo?: string | null
          id?: string
          notas?: string | null
          precio_total?: number | null
          precio_unitario?: number
          proyecto_id?: string
          tipo_articulo?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "descompuesto_proyecto_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "descompuesto_proyecto_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "descompuesto_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "descompuesto_proyecto_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      descompuestos_presto: {
        Row: {
          articulo_id: string | null
          cantidad: number | null
          codigo: string | null
          created_at: string | null
          descripcion: string
          id: string
          importe: number | null
          orden: number | null
          partida_id: string
          precio_unitario: number | null
          rendimiento: number | null
          tipo: string | null
          unidad: string | null
        }
        Insert: {
          articulo_id?: string | null
          cantidad?: number | null
          codigo?: string | null
          created_at?: string | null
          descripcion: string
          id?: string
          importe?: number | null
          orden?: number | null
          partida_id: string
          precio_unitario?: number | null
          rendimiento?: number | null
          tipo?: string | null
          unidad?: string | null
        }
        Update: {
          articulo_id?: string | null
          cantidad?: number | null
          codigo?: string | null
          created_at?: string | null
          descripcion?: string
          id?: string
          importe?: number | null
          orden?: number | null
          partida_id?: string
          precio_unitario?: number | null
          rendimiento?: number | null
          tipo?: string | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "descompuestos_presto_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: false
            referencedRelation: "partidas_presto"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_alertas: {
        Row: {
          created_at: string | null
          diario_id: string
          fecha_resolucion: string | null
          id: string
          leida: boolean | null
          mensaje: string
          nivel: string | null
          resuelta: boolean | null
          tipo: string
        }
        Insert: {
          created_at?: string | null
          diario_id: string
          fecha_resolucion?: string | null
          id?: string
          leida?: boolean | null
          mensaje: string
          nivel?: string | null
          resuelta?: boolean | null
          tipo: string
        }
        Update: {
          created_at?: string | null
          diario_id?: string
          fecha_resolucion?: string | null
          id?: string
          leida?: boolean | null
          mensaje?: string
          nivel?: string | null
          resuelta?: boolean | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "diario_alertas_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_averias: {
        Row: {
          coste_estimado: number | null
          created_at: string | null
          descripcion: string
          diario_id: string
          estado: string | null
          gravedad: string | null
          hora_deteccion: string | null
          hora_resolucion: string | null
          id: string
          maquina_equipo: string | null
          notas: string | null
          responsable_reparacion_id: string | null
          tiempo_parada_minutos: number | null
          tipo_averia: string | null
          turno_id: string | null
          ubicacion: string | null
          updated_at: string | null
        }
        Insert: {
          coste_estimado?: number | null
          created_at?: string | null
          descripcion: string
          diario_id: string
          estado?: string | null
          gravedad?: string | null
          hora_deteccion?: string | null
          hora_resolucion?: string | null
          id?: string
          maquina_equipo?: string | null
          notas?: string | null
          responsable_reparacion_id?: string | null
          tiempo_parada_minutos?: number | null
          tipo_averia?: string | null
          turno_id?: string | null
          ubicacion?: string | null
          updated_at?: string | null
        }
        Update: {
          coste_estimado?: number | null
          created_at?: string | null
          descripcion?: string
          diario_id?: string
          estado?: string | null
          gravedad?: string | null
          hora_deteccion?: string | null
          hora_resolucion?: string | null
          id?: string
          maquina_equipo?: string | null
          notas?: string | null
          responsable_reparacion_id?: string | null
          tiempo_parada_minutos?: number | null
          tipo_averia?: string | null
          turno_id?: string | null
          ubicacion?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_averias_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_averias_responsable_reparacion_id_fkey"
            columns: ["responsable_reparacion_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_averias_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_entradas_material: {
        Row: {
          articulo_compras_id: string | null
          articulo_id: string | null
          cantidad: number
          created_at: string
          diario_id: string
          id: string
          numero_albaran: string | null
          observaciones: string | null
          pedido_id: string | null
          proveedor_id: string | null
          registrado_por_id: string | null
          turno_id: string | null
          ubicacion_destino: string | null
          unidad: string | null
        }
        Insert: {
          articulo_compras_id?: string | null
          articulo_id?: string | null
          cantidad: number
          created_at?: string
          diario_id: string
          id?: string
          numero_albaran?: string | null
          observaciones?: string | null
          pedido_id?: string | null
          proveedor_id?: string | null
          registrado_por_id?: string | null
          turno_id?: string | null
          ubicacion_destino?: string | null
          unidad?: string | null
        }
        Update: {
          articulo_compras_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          created_at?: string
          diario_id?: string
          id?: string
          numero_albaran?: string | null
          observaciones?: string | null
          pedido_id?: string | null
          proveedor_id?: string | null
          registrado_por_id?: string | null
          turno_id?: string | null
          ubicacion_destino?: string | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_entradas_material_articulo_compras_id_fkey"
            columns: ["articulo_compras_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_articulo_compras_id_fkey"
            columns: ["articulo_compras_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_pedido_id_fkey"
            columns: ["pedido_id"]
            isOneToOne: false
            referencedRelation: "pedidos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_registrado_por_id_fkey"
            columns: ["registrado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_entradas_material_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_eventos: {
        Row: {
          created_at: string | null
          datos_adicionales: Json | null
          descripcion: string
          diario_id: string
          hora_evento: string | null
          id: string
          importancia: string | null
          referencia_id: string | null
          referencia_tabla: string | null
          tipo_evento: string
          turno_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          datos_adicionales?: Json | null
          descripcion: string
          diario_id: string
          hora_evento?: string | null
          id?: string
          importancia?: string | null
          referencia_id?: string | null
          referencia_tabla?: string | null
          tipo_evento: string
          turno_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          datos_adicionales?: Json | null
          descripcion?: string
          diario_id?: string
          hora_evento?: string | null
          id?: string
          importancia?: string | null
          referencia_id?: string | null
          referencia_tabla?: string | null
          tipo_evento?: string
          turno_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_eventos_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_eventos_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_fichajes: {
        Row: {
          created_at: string | null
          diario_id: string
          hora_fichaje: string
          id: string
          metodo_fichaje: string | null
          nombre_externo: string | null
          notas: string | null
          subcontrata_id: string | null
          tipo_fichaje: string
          trabajador_id: string | null
          ubicacion_fichaje: string | null
          validado: boolean | null
        }
        Insert: {
          created_at?: string | null
          diario_id: string
          hora_fichaje: string
          id?: string
          metodo_fichaje?: string | null
          nombre_externo?: string | null
          notas?: string | null
          subcontrata_id?: string | null
          tipo_fichaje: string
          trabajador_id?: string | null
          ubicacion_fichaje?: string | null
          validado?: boolean | null
        }
        Update: {
          created_at?: string | null
          diario_id?: string
          hora_fichaje?: string
          id?: string
          metodo_fichaje?: string | null
          nombre_externo?: string | null
          notas?: string | null
          subcontrata_id?: string | null
          tipo_fichaje?: string
          trabajador_id?: string | null
          ubicacion_fichaje?: string | null
          validado?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_fichajes_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_fichajes_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_fichajes_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_partes_trabajo: {
        Row: {
          created_at: string
          descripcion: string
          diario_id: string
          horas: number
          id: string
          observaciones: string | null
          orden_produccion_id: string | null
          subcontrata_id: string | null
          tipo_trabajo: string | null
          trabajador_id: string | null
          turno_id: string | null
          validado: boolean | null
          validado_por_id: string | null
          zona_trabajo: string | null
        }
        Insert: {
          created_at?: string
          descripcion: string
          diario_id: string
          horas: number
          id?: string
          observaciones?: string | null
          orden_produccion_id?: string | null
          subcontrata_id?: string | null
          tipo_trabajo?: string | null
          trabajador_id?: string | null
          turno_id?: string | null
          validado?: boolean | null
          validado_por_id?: string | null
          zona_trabajo?: string | null
        }
        Update: {
          created_at?: string
          descripcion?: string
          diario_id?: string
          horas?: number
          id?: string
          observaciones?: string | null
          orden_produccion_id?: string | null
          subcontrata_id?: string | null
          tipo_trabajo?: string | null
          trabajador_id?: string | null
          turno_id?: string | null
          validado?: boolean | null
          validado_por_id?: string | null
          zona_trabajo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_partes_trabajo_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_partes_trabajo_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_partes_trabajo_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_partes_trabajo_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_partes_trabajo_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_partes_trabajo_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_personal_presente: {
        Row: {
          created_at: string
          diario_id: string
          hora_entrada: string | null
          hora_salida: string | null
          id: string
          nombre_externo: string | null
          presente: boolean | null
          subcontrata_id: string | null
          tarea_asignada: string | null
          tipo_personal: string
          trabajador_id: string | null
          turno_id: string | null
          zona_asignada: string | null
        }
        Insert: {
          created_at?: string
          diario_id: string
          hora_entrada?: string | null
          hora_salida?: string | null
          id?: string
          nombre_externo?: string | null
          presente?: boolean | null
          subcontrata_id?: string | null
          tarea_asignada?: string | null
          tipo_personal: string
          trabajador_id?: string | null
          turno_id?: string | null
          zona_asignada?: string | null
        }
        Update: {
          created_at?: string
          diario_id?: string
          hora_entrada?: string | null
          hora_salida?: string | null
          id?: string
          nombre_externo?: string | null
          presente?: boolean | null
          subcontrata_id?: string | null
          tarea_asignada?: string | null
          tipo_personal?: string
          trabajador_id?: string | null
          turno_id?: string | null
          zona_asignada?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_personal_presente_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_personal_presente_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_personal_presente_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_personal_presente_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_produccion: {
        Row: {
          cerrado: boolean | null
          cerrado_por_id: string | null
          created_at: string
          estado: string
          fecha: string
          fecha_cierre: string | null
          fecha_validacion: string | null
          generado_automaticamente: boolean | null
          id: string
          notas: string | null
          responsable_id: string | null
          resumen_dia: string | null
          total_horas_trabajadas: number | null
          total_personal_propio: number | null
          total_personal_subcontrata: number | null
          updated_at: string
          validado_por_id: string | null
        }
        Insert: {
          cerrado?: boolean | null
          cerrado_por_id?: string | null
          created_at?: string
          estado?: string
          fecha: string
          fecha_cierre?: string | null
          fecha_validacion?: string | null
          generado_automaticamente?: boolean | null
          id?: string
          notas?: string | null
          responsable_id?: string | null
          resumen_dia?: string | null
          total_horas_trabajadas?: number | null
          total_personal_propio?: number | null
          total_personal_subcontrata?: number | null
          updated_at?: string
          validado_por_id?: string | null
        }
        Update: {
          cerrado?: boolean | null
          cerrado_por_id?: string | null
          created_at?: string
          estado?: string
          fecha?: string
          fecha_cierre?: string | null
          fecha_validacion?: string | null
          generado_automaticamente?: boolean | null
          id?: string
          notas?: string | null
          responsable_id?: string | null
          resumen_dia?: string | null
          total_horas_trabajadas?: number | null
          total_personal_propio?: number | null
          total_personal_subcontrata?: number | null
          updated_at?: string
          validado_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_produccion_cerrado_por_id_fkey"
            columns: ["cerrado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_produccion_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_produccion_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_salidas_material: {
        Row: {
          articulo_compras_id: string | null
          articulo_id: string | null
          cantidad: number
          created_at: string
          destino: string | null
          diario_id: string
          id: string
          observaciones: string | null
          orden_produccion_id: string | null
          proyecto_id: string | null
          registrado_por_id: string | null
          tipo_salida: string | null
          turno_id: string | null
          unidad: string | null
        }
        Insert: {
          articulo_compras_id?: string | null
          articulo_id?: string | null
          cantidad: number
          created_at?: string
          destino?: string | null
          diario_id: string
          id?: string
          observaciones?: string | null
          orden_produccion_id?: string | null
          proyecto_id?: string | null
          registrado_por_id?: string | null
          tipo_salida?: string | null
          turno_id?: string | null
          unidad?: string | null
        }
        Update: {
          articulo_compras_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          created_at?: string
          destino?: string | null
          diario_id?: string
          id?: string
          observaciones?: string | null
          orden_produccion_id?: string | null
          proyecto_id?: string | null
          registrado_por_id?: string | null
          tipo_salida?: string | null
          turno_id?: string | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_salidas_material_articulo_compras_id_fkey"
            columns: ["articulo_compras_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_articulo_compras_id_fkey"
            columns: ["articulo_compras_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_registrado_por_id_fkey"
            columns: ["registrado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_salidas_material_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_subcontratas_actividad: {
        Row: {
          actividad: string
          created_at: string
          diario_id: string
          estado: string | null
          horas_totales: number | null
          id: string
          num_operarios: number | null
          observaciones: string | null
          orden_produccion_id: string | null
          proyecto_id: string | null
          subcontrata_id: string
          turno_id: string | null
          zona: string | null
        }
        Insert: {
          actividad: string
          created_at?: string
          diario_id: string
          estado?: string | null
          horas_totales?: number | null
          id?: string
          num_operarios?: number | null
          observaciones?: string | null
          orden_produccion_id?: string | null
          proyecto_id?: string | null
          subcontrata_id: string
          turno_id?: string | null
          zona?: string | null
        }
        Update: {
          actividad?: string
          created_at?: string
          diario_id?: string
          estado?: string | null
          horas_totales?: number | null
          id?: string
          num_operarios?: number | null
          observaciones?: string | null
          orden_produccion_id?: string | null
          proyecto_id?: string | null
          subcontrata_id?: string
          turno_id?: string | null
          zona?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diario_subcontratas_actividad_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_subcontratas_actividad_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_subcontratas_actividad_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_subcontratas_actividad_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_subcontratas_actividad_turno_id_fkey"
            columns: ["turno_id"]
            isOneToOne: false
            referencedRelation: "diario_turnos"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_turnos: {
        Row: {
          activo: boolean | null
          created_at: string
          diario_id: string
          hora_fin: string
          hora_inicio: string
          id: string
          nombre: string
          notas: string | null
          orden: number
        }
        Insert: {
          activo?: boolean | null
          created_at?: string
          diario_id: string
          hora_fin: string
          hora_inicio: string
          id?: string
          nombre: string
          notas?: string | null
          orden?: number
        }
        Update: {
          activo?: boolean | null
          created_at?: string
          diario_id?: string
          hora_fin?: string
          hora_inicio?: string
          id?: string
          nombre?: string
          notas?: string | null
          orden?: number
        }
        Relationships: [
          {
            foreignKeyName: "diario_turnos_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diario_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      diario_turnos_config: {
        Row: {
          activo: boolean | null
          created_at: string
          hora_fin: string
          hora_inicio: string
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          created_at?: string
          hora_fin: string
          hora_inicio: string
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          created_at?: string
          hora_fin?: string
          hora_inicio?: string
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      documentos: {
        Row: {
          bloqueado: boolean | null
          carpeta_id: string | null
          cliente_id: string | null
          codigo: string
          created_at: string
          descripcion: string | null
          edificio_id: string | null
          fase: string | null
          fecha_documento: string | null
          hash_archivo: string | null
          id: string
          nombre: string
          nombre_archivo: string
          origen: string | null
          proyecto_id: string | null
          ruta_storage: string
          subido_por_id: string | null
          tags: string[] | null
          tamano_bytes: number | null
          tipo: Database["public"]["Enums"]["tipo_documento"]
          tipo_mime: string | null
          updated_at: string
          version: number
          version_anterior_id: string | null
        }
        Insert: {
          bloqueado?: boolean | null
          carpeta_id?: string | null
          cliente_id?: string | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          fase?: string | null
          fecha_documento?: string | null
          hash_archivo?: string | null
          id?: string
          nombre: string
          nombre_archivo: string
          origen?: string | null
          proyecto_id?: string | null
          ruta_storage: string
          subido_por_id?: string | null
          tags?: string[] | null
          tamano_bytes?: number | null
          tipo: Database["public"]["Enums"]["tipo_documento"]
          tipo_mime?: string | null
          updated_at?: string
          version?: number
          version_anterior_id?: string | null
        }
        Update: {
          bloqueado?: boolean | null
          carpeta_id?: string | null
          cliente_id?: string | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          fase?: string | null
          fecha_documento?: string | null
          hash_archivo?: string | null
          id?: string
          nombre?: string
          nombre_archivo?: string
          origen?: string | null
          proyecto_id?: string | null
          ruta_storage?: string
          subido_por_id?: string | null
          tags?: string[] | null
          tamano_bytes?: number | null
          tipo?: Database["public"]["Enums"]["tipo_documento"]
          tipo_mime?: string | null
          updated_at?: string
          version?: number
          version_anterior_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documentos_carpeta_id_fkey"
            columns: ["carpeta_id"]
            isOneToOne: false
            referencedRelation: "carpetas_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_subido_por_id_fkey"
            columns: ["subido_por_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_version_anterior_id_fkey"
            columns: ["version_anterior_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_articulo: {
        Row: {
          archivo_nombre: string
          archivo_path: string
          articulo_id: string
          created_at: string | null
          fecha: string | null
          id: string
          notas: string | null
          proveedor_id: string | null
          tipo_documento: string
          titulo: string | null
          updated_at: string | null
        }
        Insert: {
          archivo_nombre: string
          archivo_path: string
          articulo_id: string
          created_at?: string | null
          fecha?: string | null
          id?: string
          notas?: string | null
          proveedor_id?: string | null
          tipo_documento: string
          titulo?: string | null
          updated_at?: string | null
        }
        Update: {
          archivo_nombre?: string
          archivo_path?: string
          articulo_id?: string
          created_at?: string | null
          fecha?: string | null
          id?: string
          notas?: string | null
          proveedor_id?: string | null
          tipo_documento?: string
          titulo?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documentos_articulo_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_cte: {
        Row: {
          archivo_nombre: string
          archivo_path: string
          categoria: string
          chunks_generados: number | null
          codigo: string
          created_at: string
          descripcion: string | null
          fecha_procesado: string | null
          fecha_publicacion: string | null
          id: string
          nombre: string
          notas: string | null
          procesado: boolean | null
          tags: string[] | null
          tamano_bytes: number | null
          updated_at: string
          version: string | null
          vigente: boolean | null
        }
        Insert: {
          archivo_nombre: string
          archivo_path: string
          categoria: string
          chunks_generados?: number | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          fecha_publicacion?: string | null
          id?: string
          nombre: string
          notas?: string | null
          procesado?: boolean | null
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          version?: string | null
          vigente?: boolean | null
        }
        Update: {
          archivo_nombre?: string
          archivo_path?: string
          categoria?: string
          chunks_generados?: number | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          fecha_publicacion?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          procesado?: boolean | null
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          version?: string | null
          vigente?: boolean | null
        }
        Relationships: []
      }
      documentos_estructura_espacial: {
        Row: {
          checksum_archivo: string
          clasificacion_automatica: boolean
          created_at: string
          created_by: string | null
          descripcion: string | null
          estado_clasificacion: string
          id: string
          nivel_documento: string
          nombre_archivo: string
          notas: string | null
          proyecto_estructura_id: string
          referencia_id: string | null
          ruta_storage: string
          tamano_bytes: number | null
          tipo_documento: string
          tipo_mime: string | null
          updated_at: string
        }
        Insert: {
          checksum_archivo: string
          clasificacion_automatica?: boolean
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          estado_clasificacion?: string
          id?: string
          nivel_documento?: string
          nombre_archivo: string
          notas?: string | null
          proyecto_estructura_id: string
          referencia_id?: string | null
          ruta_storage: string
          tamano_bytes?: number | null
          tipo_documento?: string
          tipo_mime?: string | null
          updated_at?: string
        }
        Update: {
          checksum_archivo?: string
          clasificacion_automatica?: boolean
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          estado_clasificacion?: string
          id?: string
          nivel_documento?: string
          nombre_archivo?: string
          notas?: string | null
          proyecto_estructura_id?: string
          referencia_id?: string | null
          ruta_storage?: string
          tamano_bytes?: number | null
          tipo_documento?: string
          tipo_mime?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documentos_estructura_espacial_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_personal_subcontrata: {
        Row: {
          archivo_nombre: string | null
          archivo_path: string | null
          created_at: string
          descripcion: string | null
          estado: string
          fecha_emision: string | null
          fecha_vencimiento: string | null
          id: string
          nombre: string
          notas: string | null
          obligatorio: boolean | null
          personal_id: string
          subcontrata_id: string
          tipo: string
          updated_at: string
        }
        Insert: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fecha_emision?: string | null
          fecha_vencimiento?: string | null
          id?: string
          nombre: string
          notas?: string | null
          obligatorio?: boolean | null
          personal_id: string
          subcontrata_id: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fecha_emision?: string | null
          fecha_vencimiento?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          obligatorio?: boolean | null
          personal_id?: string
          subcontrata_id?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documentos_personal_subcontrata_personal_id_fkey"
            columns: ["personal_id"]
            isOneToOne: false
            referencedRelation: "personal_subcontrata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_personal_subcontrata_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_subcontrata: {
        Row: {
          archivo_nombre: string | null
          archivo_path: string | null
          created_at: string
          descripcion: string | null
          estado: string
          fecha_emision: string | null
          fecha_vencimiento: string | null
          id: string
          nombre: string
          notas: string | null
          obligatorio: boolean | null
          subcontrata_id: string
          tipo: string
          updated_at: string
        }
        Insert: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fecha_emision?: string | null
          fecha_vencimiento?: string | null
          id?: string
          nombre: string
          notas?: string | null
          obligatorio?: boolean | null
          subcontrata_id: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fecha_emision?: string | null
          fecha_vencimiento?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          obligatorio?: boolean | null
          subcontrata_id?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documentos_subcontrata_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_subcontrata_v2: {
        Row: {
          comentario_revision: string | null
          created_at: string
          estado_validacion: Database["public"]["Enums"]["estado_validacion_doc"]
          fecha_caducidad: string | null
          fecha_emision: string | null
          fecha_subida: string
          fecha_validacion: string | null
          id: string
          maquinaria_id: string | null
          nombre_archivo: string
          nombre_personalizado: string | null
          proveedor_id: string
          proyecto_id: string | null
          tipo_documento_id: string
          trabajador_id: string | null
          updated_at: string
          url_storage: string
          validado_por_id: string | null
        }
        Insert: {
          comentario_revision?: string | null
          created_at?: string
          estado_validacion?: Database["public"]["Enums"]["estado_validacion_doc"]
          fecha_caducidad?: string | null
          fecha_emision?: string | null
          fecha_subida?: string
          fecha_validacion?: string | null
          id?: string
          maquinaria_id?: string | null
          nombre_archivo: string
          nombre_personalizado?: string | null
          proveedor_id: string
          proyecto_id?: string | null
          tipo_documento_id: string
          trabajador_id?: string | null
          updated_at?: string
          url_storage: string
          validado_por_id?: string | null
        }
        Update: {
          comentario_revision?: string | null
          created_at?: string
          estado_validacion?: Database["public"]["Enums"]["estado_validacion_doc"]
          fecha_caducidad?: string | null
          fecha_emision?: string | null
          fecha_subida?: string
          fecha_validacion?: string | null
          id?: string
          maquinaria_id?: string | null
          nombre_archivo?: string
          nombre_personalizado?: string | null
          proveedor_id?: string
          proyecto_id?: string | null
          tipo_documento_id?: string
          trabajador_id?: string | null
          updated_at?: string
          url_storage?: string
          validado_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documentos_subcontrata_v2_maquinaria_id_fkey"
            columns: ["maquinaria_id"]
            isOneToOne: false
            referencedRelation: "maquinaria_subcontrata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_subcontrata_v2_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_subcontrata_v2_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_subcontrata_v2_tipo_documento_id_fkey"
            columns: ["tipo_documento_id"]
            isOneToOne: false
            referencedRelation: "tipos_documento_sc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_subcontrata_v2_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores_subcontrata"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_trabajadores: {
        Row: {
          archivo_nombre: string | null
          archivo_tamano: number | null
          archivo_tipo: string | null
          archivo_url: string
          categoria: string | null
          created_at: string
          descripcion: string | null
          fecha_caducidad: string | null
          fecha_documento: string | null
          id: string
          nombre: string
          tipo: string | null
          trabajador_id: string
          updated_at: string
        }
        Insert: {
          archivo_nombre?: string | null
          archivo_tamano?: number | null
          archivo_tipo?: string | null
          archivo_url: string
          categoria?: string | null
          created_at?: string
          descripcion?: string | null
          fecha_caducidad?: string | null
          fecha_documento?: string | null
          id?: string
          nombre: string
          tipo?: string | null
          trabajador_id: string
          updated_at?: string
        }
        Update: {
          archivo_nombre?: string | null
          archivo_tamano?: number | null
          archivo_tipo?: string | null
          archivo_url?: string
          categoria?: string | null
          created_at?: string
          descripcion?: string | null
          fecha_caducidad?: string | null
          fecha_documento?: string | null
          id?: string
          nombre?: string
          tipo?: string | null
          trabajador_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documentos_trabajadores_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      edificio_atributos: {
        Row: {
          codigo: string
          created_at: string | null
          edificio_id: string
          id: string
          nombre: string
          opciones_seleccion: Json | null
          orden: number | null
          tipo_valor: string
          unidad: string | null
          updated_at: string | null
          valor_booleano: boolean | null
          valor_fecha: string | null
          valor_numero: number | null
          valor_texto: string | null
          visible_portal: boolean | null
        }
        Insert: {
          codigo: string
          created_at?: string | null
          edificio_id: string
          id?: string
          nombre: string
          opciones_seleccion?: Json | null
          orden?: number | null
          tipo_valor: string
          unidad?: string | null
          updated_at?: string | null
          valor_booleano?: boolean | null
          valor_fecha?: string | null
          valor_numero?: number | null
          valor_texto?: string | null
          visible_portal?: boolean | null
        }
        Update: {
          codigo?: string
          created_at?: string | null
          edificio_id?: string
          id?: string
          nombre?: string
          opciones_seleccion?: Json | null
          orden?: number | null
          tipo_valor?: string
          unidad?: string | null
          updated_at?: string | null
          valor_booleano?: boolean | null
          valor_fecha?: string | null
          valor_numero?: number | null
          valor_texto?: string | null
          visible_portal?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "edificio_atributos_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      edificio_modulos: {
        Row: {
          cantidad: number
          created_at: string
          edificio_id: string
          id: string
          modulo_id: string
          notas: string | null
          orden: number | null
          updated_at: string
        }
        Insert: {
          cantidad?: number
          created_at?: string
          edificio_id: string
          id?: string
          modulo_id: string
          notas?: string | null
          orden?: number | null
          updated_at?: string
        }
        Update: {
          cantidad?: number
          created_at?: string
          edificio_id?: string
          id?: string
          modulo_id?: string
          notas?: string | null
          orden?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "edificio_modulos_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificio_modulos_modulo_id_fkey"
            columns: ["modulo_id"]
            isOneToOne: false
            referencedRelation: "modulos_predefinidos"
            referencedColumns: ["id"]
          },
        ]
      }
      edificio_tipos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          icono: string | null
          id: string
          nombre: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      edificios_proyecto: {
        Row: {
          centro_trabajo_id: string | null
          codigo: string
          configuracion_id: string | null
          created_at: string
          descripcion: string | null
          edificio_predecesor_id: string | null
          estado: string | null
          fabricacion_iniciada: boolean | null
          fase_fabricacion: string | null
          fecha_entrega_prevista: string | null
          fecha_entrega_real: string | null
          fecha_inicio_fabricacion: string | null
          id: string
          modelo_id: string | null
          nombre: string
          nomenclatura_cliente: string | null
          notas: string | null
          num_alojamientos: number | null
          opciones_personalizadas: Json | null
          orden: number
          plantas: number | null
          porcentaje_solapamiento_anterior: number | null
          produccion_fin_previsto: string | null
          produccion_inicio_previsto: string | null
          progreso_montaje: number | null
          progreso_produccion: number | null
          proyecto_id: string
          superficie_m2: number | null
          tipo_edificio_id: string | null
          ubicacion_parcela: string | null
          unidades_vivienda: number | null
          updated_at: string
        }
        Insert: {
          centro_trabajo_id?: string | null
          codigo: string
          configuracion_id?: string | null
          created_at?: string
          descripcion?: string | null
          edificio_predecesor_id?: string | null
          estado?: string | null
          fabricacion_iniciada?: boolean | null
          fase_fabricacion?: string | null
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          fecha_inicio_fabricacion?: string | null
          id?: string
          modelo_id?: string | null
          nombre: string
          nomenclatura_cliente?: string | null
          notas?: string | null
          num_alojamientos?: number | null
          opciones_personalizadas?: Json | null
          orden?: number
          plantas?: number | null
          porcentaje_solapamiento_anterior?: number | null
          produccion_fin_previsto?: string | null
          produccion_inicio_previsto?: string | null
          progreso_montaje?: number | null
          progreso_produccion?: number | null
          proyecto_id: string
          superficie_m2?: number | null
          tipo_edificio_id?: string | null
          ubicacion_parcela?: string | null
          unidades_vivienda?: number | null
          updated_at?: string
        }
        Update: {
          centro_trabajo_id?: string | null
          codigo?: string
          configuracion_id?: string | null
          created_at?: string
          descripcion?: string | null
          edificio_predecesor_id?: string | null
          estado?: string | null
          fabricacion_iniciada?: boolean | null
          fase_fabricacion?: string | null
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          fecha_inicio_fabricacion?: string | null
          id?: string
          modelo_id?: string | null
          nombre?: string
          nomenclatura_cliente?: string | null
          notas?: string | null
          num_alojamientos?: number | null
          opciones_personalizadas?: Json | null
          orden?: number
          plantas?: number | null
          porcentaje_solapamiento_anterior?: number | null
          produccion_fin_previsto?: string | null
          produccion_inicio_previsto?: string | null
          progreso_montaje?: number | null
          progreso_produccion?: number | null
          proyecto_id?: string
          superficie_m2?: number | null
          tipo_edificio_id?: string | null
          ubicacion_parcela?: string | null
          unidades_vivienda?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "edificios_proyecto_centro_trabajo_id_fkey"
            columns: ["centro_trabajo_id"]
            isOneToOne: false
            referencedRelation: "centros_trabajo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificios_proyecto_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificios_proyecto_edificio_predecesor_id_fkey"
            columns: ["edificio_predecesor_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificios_proyecto_modelo_id_fkey"
            columns: ["modelo_id"]
            isOneToOne: false
            referencedRelation: "modelos_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificios_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edificios_proyecto_tipo_edificio_id_fkey"
            columns: ["tipo_edificio_id"]
            isOneToOne: false
            referencedRelation: "edificio_tipos"
            referencedColumns: ["id"]
          },
        ]
      }
      empresas: {
        Row: {
          activo: boolean | null
          cif: string | null
          codigo: string
          codigo_postal: string | null
          created_at: string
          direccion: string | null
          email: string | null
          id: string
          localidad: string | null
          nombre: string
          orden: number | null
          provincia: string | null
          telefono: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          cif?: string | null
          codigo: string
          codigo_postal?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          id?: string
          localidad?: string | null
          nombre: string
          orden?: number | null
          provincia?: string | null
          telefono?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          cif?: string | null
          codigo?: string
          codigo_postal?: string | null
          created_at?: string
          direccion?: string | null
          email?: string | null
          id?: string
          localidad?: string | null
          nombre?: string
          orden?: number | null
          provincia?: string | null
          telefono?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      entradas_diarias: {
        Row: {
          created_at: string
          fecha: string
          hora_entrada: string
          hora_salida: string | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          fecha?: string
          hora_entrada?: string
          hora_salida?: string | null
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          fecha?: string
          hora_entrada?: string
          hora_salida?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      envios_oferta: {
        Row: {
          aceptado_por_id: string | null
          cliente_id: string | null
          created_at: string
          email_destino: string | null
          enviado_por_id: string | null
          estado_envio: string
          fecha_aceptacion: string | null
          fecha_envio: string | null
          fecha_rechazo: string | null
          id: string
          motivo_rechazo: string | null
          oferta_id: string
          pdf_generado_at: string | null
          pdf_generado_por_id: string | null
          pdf_storage_path: string | null
          pdf_version: number | null
          proyecto_id: string
          updated_at: string
        }
        Insert: {
          aceptado_por_id?: string | null
          cliente_id?: string | null
          created_at?: string
          email_destino?: string | null
          enviado_por_id?: string | null
          estado_envio?: string
          fecha_aceptacion?: string | null
          fecha_envio?: string | null
          fecha_rechazo?: string | null
          id?: string
          motivo_rechazo?: string | null
          oferta_id: string
          pdf_generado_at?: string | null
          pdf_generado_por_id?: string | null
          pdf_storage_path?: string | null
          pdf_version?: number | null
          proyecto_id: string
          updated_at?: string
        }
        Update: {
          aceptado_por_id?: string | null
          cliente_id?: string | null
          created_at?: string
          email_destino?: string | null
          enviado_por_id?: string | null
          estado_envio?: string
          fecha_aceptacion?: string | null
          fecha_envio?: string | null
          fecha_rechazo?: string | null
          id?: string
          motivo_rechazo?: string | null
          oferta_id?: string
          pdf_generado_at?: string | null
          pdf_generado_por_id?: string | null
          pdf_storage_path?: string | null
          pdf_version?: number | null
          proyecto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "envios_oferta_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "envios_oferta_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "envios_oferta_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      escenario_conexiones: {
        Row: {
          created_at: string | null
          escenario_id: string
          id: string
          modulo_destino_id: string
          modulo_origen_id: string
          punto_destino: string | null
          punto_origen: string | null
          tipo_conexion: string | null
        }
        Insert: {
          created_at?: string | null
          escenario_id: string
          id?: string
          modulo_destino_id: string
          modulo_origen_id: string
          punto_destino?: string | null
          punto_origen?: string | null
          tipo_conexion?: string | null
        }
        Update: {
          created_at?: string | null
          escenario_id?: string
          id?: string
          modulo_destino_id?: string
          modulo_origen_id?: string
          punto_destino?: string | null
          punto_origen?: string | null
          tipo_conexion?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "escenario_conexiones_escenario_id_fkey"
            columns: ["escenario_id"]
            isOneToOne: false
            referencedRelation: "escenarios_diseno"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "escenario_conexiones_modulo_destino_id_fkey"
            columns: ["modulo_destino_id"]
            isOneToOne: false
            referencedRelation: "escenario_modulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "escenario_conexiones_modulo_origen_id_fkey"
            columns: ["modulo_origen_id"]
            isOneToOne: false
            referencedRelation: "escenario_modulos"
            referencedColumns: ["id"]
          },
        ]
      }
      escenario_modulos: {
        Row: {
          cantidad: number | null
          created_at: string | null
          escala: number | null
          escenario_id: string
          id: string
          modulo_id: string
          notas: string | null
          pos_x: number | null
          pos_y: number | null
          rotacion: number | null
        }
        Insert: {
          cantidad?: number | null
          created_at?: string | null
          escala?: number | null
          escenario_id: string
          id?: string
          modulo_id: string
          notas?: string | null
          pos_x?: number | null
          pos_y?: number | null
          rotacion?: number | null
        }
        Update: {
          cantidad?: number | null
          created_at?: string | null
          escala?: number | null
          escenario_id?: string
          id?: string
          modulo_id?: string
          notas?: string | null
          pos_x?: number | null
          pos_y?: number | null
          rotacion?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "escenario_modulos_escenario_id_fkey"
            columns: ["escenario_id"]
            isOneToOne: false
            referencedRelation: "escenarios_diseno"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "escenario_modulos_modulo_id_fkey"
            columns: ["modulo_id"]
            isOneToOne: false
            referencedRelation: "modulos_predefinidos"
            referencedColumns: ["id"]
          },
        ]
      }
      escenarios_diseno: {
        Row: {
          canvas_config: Json | null
          codigo: string
          coste_total: number | null
          created_at: string | null
          created_by: string | null
          descripcion: string | null
          estado: string | null
          id: string
          nombre: string
          peso_total: number | null
          proyecto_id: string | null
          updated_at: string | null
        }
        Insert: {
          canvas_config?: Json | null
          codigo: string
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          estado?: string | null
          id?: string
          nombre: string
          peso_total?: number | null
          proyecto_id?: string | null
          updated_at?: string | null
        }
        Update: {
          canvas_config?: Json | null
          codigo?: string
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          estado?: string | null
          id?: string
          nombre?: string
          peso_total?: number | null
          proyecto_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "escenarios_diseno_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      estancias_configuracion: {
        Row: {
          configuracion_id: string
          created_at: string
          cumple_cte: boolean | null
          error_cte: string | null
          id: string
          lado_minimo_m: number | null
          nombre: string
          orden: number | null
          planta: number
          superficie_m2: number
          tipo_estancia: string
        }
        Insert: {
          configuracion_id: string
          created_at?: string
          cumple_cte?: boolean | null
          error_cte?: string | null
          id?: string
          lado_minimo_m?: number | null
          nombre: string
          orden?: number | null
          planta?: number
          superficie_m2: number
          tipo_estancia: string
        }
        Update: {
          configuracion_id?: string
          created_at?: string
          cumple_cte?: boolean | null
          error_cte?: string | null
          id?: string
          lado_minimo_m?: number | null
          nombre?: string
          orden?: number | null
          planta?: number
          superficie_m2?: number
          tipo_estancia?: string
        }
        Relationships: [
          {
            foreignKeyName: "estancias_configuracion_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
        ]
      }
      estatus_trabajadores: {
        Row: {
          activo: boolean | null
          codigo: string
          color: string | null
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          color?: string | null
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          color?: string | null
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      estructura_coste: {
        Row: {
          activo: boolean | null
          codigo_estructura: string
          coste_material_calculado: number | null
          coste_mo_calculado: number | null
          coste_total_calculado: number | null
          created_at: string | null
          created_by: string | null
          departamento_responsable_id: string | null
          descripcion: string | null
          id: string
          nivel_estructura: Database["public"]["Enums"]["nivel_estructura"]
          nombre_estructura: string
          sistema_constructivo_id: string | null
          tipo_estructura: Database["public"]["Enums"]["tipo_estructura_enum"]
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo_estructura: string
          coste_material_calculado?: number | null
          coste_mo_calculado?: number | null
          coste_total_calculado?: number | null
          created_at?: string | null
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion?: string | null
          id?: string
          nivel_estructura: Database["public"]["Enums"]["nivel_estructura"]
          nombre_estructura: string
          sistema_constructivo_id?: string | null
          tipo_estructura?: Database["public"]["Enums"]["tipo_estructura_enum"]
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo_estructura?: string
          coste_material_calculado?: number | null
          coste_mo_calculado?: number | null
          coste_total_calculado?: number | null
          created_at?: string | null
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion?: string | null
          id?: string
          nivel_estructura?: Database["public"]["Enums"]["nivel_estructura"]
          nombre_estructura?: string
          sistema_constructivo_id?: string | null
          tipo_estructura?: Database["public"]["Enums"]["tipo_estructura_enum"]
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estructura_coste_departamento_responsable_id_fkey"
            columns: ["departamento_responsable_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
        ]
      }
      estructura_coste_componentes: {
        Row: {
          articulo_id: string | null
          cantidad: number
          created_at: string | null
          estructura_hija_id: string | null
          estructura_padre_id: string
          id: string
          notas: string | null
          orden: number | null
          tipo_componente: Database["public"]["Enums"]["tipo_componente_enum"]
          unidad: string | null
          updated_at: string | null
        }
        Insert: {
          articulo_id?: string | null
          cantidad: number
          created_at?: string | null
          estructura_hija_id?: string | null
          estructura_padre_id: string
          id?: string
          notas?: string | null
          orden?: number | null
          tipo_componente: Database["public"]["Enums"]["tipo_componente_enum"]
          unidad?: string | null
          updated_at?: string | null
        }
        Update: {
          articulo_id?: string | null
          cantidad?: number
          created_at?: string | null
          estructura_hija_id?: string | null
          estructura_padre_id?: string
          id?: string
          notas?: string | null
          orden?: number | null
          tipo_componente?: Database["public"]["Enums"]["tipo_componente_enum"]
          unidad?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estructura_coste_componentes_estructura_hija_id_fkey"
            columns: ["estructura_hija_id"]
            isOneToOne: false
            referencedRelation: "estructura_coste"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estructura_coste_componentes_estructura_padre_id_fkey"
            columns: ["estructura_padre_id"]
            isOneToOne: false
            referencedRelation: "estructura_coste"
            referencedColumns: ["id"]
          },
        ]
      }
      eventos_sistema: {
        Row: {
          created_at: string | null
          detalle: string | null
          ejecutado_por: string | null
          ejecutado_por_sistema: boolean | null
          fecha: string | null
          id: string
          metadata: Json | null
          proyecto_id: string
          resultado: string | null
          tipo_evento_codigo: string
          tipo_evento_id: string | null
        }
        Insert: {
          created_at?: string | null
          detalle?: string | null
          ejecutado_por?: string | null
          ejecutado_por_sistema?: boolean | null
          fecha?: string | null
          id?: string
          metadata?: Json | null
          proyecto_id: string
          resultado?: string | null
          tipo_evento_codigo: string
          tipo_evento_id?: string | null
        }
        Update: {
          created_at?: string | null
          detalle?: string | null
          ejecutado_por?: string | null
          ejecutado_por_sistema?: boolean | null
          fecha?: string | null
          id?: string
          metadata?: Json | null
          proyecto_id?: string
          resultado?: string | null
          tipo_evento_codigo?: string
          tipo_evento_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "eventos_sistema_ejecutado_por_fkey"
            columns: ["ejecutado_por"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "eventos_sistema_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "eventos_sistema_tipo_evento_id_fkey"
            columns: ["tipo_evento_id"]
            isOneToOne: false
            referencedRelation: "catalogo_tipos_evento"
            referencedColumns: ["id"]
          },
        ]
      }
      evidencias_tarea: {
        Row: {
          archivo_nombre: string | null
          archivo_tamano: number | null
          archivo_tipo: string | null
          archivo_url: string | null
          created_at: string | null
          created_by: string | null
          descripcion: string | null
          fecha_evidencia: string | null
          fecha_validacion: string | null
          id: string
          nombre: string
          tarea_id: string
          tipo: string
          validado: boolean | null
          validado_por_id: string | null
          visible_portal: boolean | null
        }
        Insert: {
          archivo_nombre?: string | null
          archivo_tamano?: number | null
          archivo_tipo?: string | null
          archivo_url?: string | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          fecha_evidencia?: string | null
          fecha_validacion?: string | null
          id?: string
          nombre: string
          tarea_id: string
          tipo: string
          validado?: boolean | null
          validado_por_id?: string | null
          visible_portal?: boolean | null
        }
        Update: {
          archivo_nombre?: string | null
          archivo_tamano?: number | null
          archivo_tipo?: string | null
          archivo_url?: string | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          fecha_evidencia?: string | null
          fecha_validacion?: string | null
          id?: string
          nombre?: string
          tarea_id?: string
          tipo?: string
          validado?: boolean | null
          validado_por_id?: string | null
          visible_portal?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "evidencias_tarea_tarea_id_fkey"
            columns: ["tarea_id"]
            isOneToOne: false
            referencedRelation: "tareas_cronograma"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evidencias_tarea_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      excepciones_acceso_usuario: {
        Row: {
          created_at: string | null
          descripcion: string | null
          id: string
          puede_borrar: boolean | null
          puede_editar: boolean | null
          puede_ver: boolean | null
          seccion: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          puede_borrar?: boolean | null
          puede_editar?: boolean | null
          puede_ver?: boolean | null
          seccion: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          puede_borrar?: boolean | null
          puede_editar?: boolean | null
          puede_ver?: boolean | null
          seccion?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      familias_articulos: {
        Row: {
          codigo: string
          created_at: string
          descripcion: string | null
          familia_padre_id: string | null
          id: string
          nombre: string
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          descripcion?: string | null
          familia_padre_id?: string | null
          id?: string
          nombre: string
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          descripcion?: string | null
          familia_padre_id?: string | null
          id?: string
          nombre?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "familias_articulos_familia_padre_id_fkey"
            columns: ["familia_padre_id"]
            isOneToOne: false
            referencedRelation: "familias_articulos"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_abante: {
        Row: {
          condiciones_gate: Json | null
          created_at: string
          descripcion: string | null
          estado: string
          fase: Database["public"]["Enums"]["fase_abante"]
          fecha_fin_planificada: string | null
          fecha_fin_real: string | null
          fecha_gate: string | null
          fecha_inicio_planificada: string | null
          fecha_inicio_real: string | null
          gate_superado: boolean
          id: string
          nombre: string
          notas: string | null
          progreso: number
          proyecto_id: string
          responsable_id: string | null
          updated_at: string
        }
        Insert: {
          condiciones_gate?: Json | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fase: Database["public"]["Enums"]["fase_abante"]
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_gate?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          gate_superado?: boolean
          id?: string
          nombre: string
          notas?: string | null
          progreso?: number
          proyecto_id: string
          responsable_id?: string | null
          updated_at?: string
        }
        Update: {
          condiciones_gate?: Json | null
          created_at?: string
          descripcion?: string | null
          estado?: string
          fase?: Database["public"]["Enums"]["fase_abante"]
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_gate?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          gate_superado?: boolean
          id?: string
          nombre?: string
          notas?: string | null
          progreso?: number
          proyecto_id?: string
          responsable_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fases_abante_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fases_abante_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_construccion_edificio: {
        Row: {
          completado_por_id: string | null
          created_at: string
          descripcion: string | null
          edificio_id: string
          estado: string
          fecha_fin: string | null
          fecha_inicio: string | null
          id: string
          nombre: string
          notas: string | null
          orden: number
          updated_at: string
        }
        Insert: {
          completado_por_id?: string | null
          created_at?: string
          descripcion?: string | null
          edificio_id: string
          estado?: string
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          nombre: string
          notas?: string | null
          orden?: number
          updated_at?: string
        }
        Update: {
          completado_por_id?: string | null
          created_at?: string
          descripcion?: string | null
          edificio_id?: string
          estado?: string
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          orden?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fases_construccion_edificio_completado_por_id_fkey"
            columns: ["completado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fases_construccion_edificio_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_maestro: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          protegido: boolean | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          protegido?: boolean | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          protegido?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fases_produccion: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          es_subfase: boolean | null
          fase_padre_id: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          es_subfase?: boolean | null
          fase_padre_id?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          es_subfase?: boolean | null
          fase_padre_id?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: [
          {
            foreignKeyName: "fases_produccion_fase_padre_id_fkey"
            columns: ["fase_padre_id"]
            isOneToOne: false
            referencedRelation: "fases_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_proyecto: {
        Row: {
          created_at: string
          estado: Database["public"]["Enums"]["estado_registro"]
          fecha_fin_prevista: string | null
          fecha_fin_real: string | null
          fecha_inicio: string | null
          id: string
          nombre: string
          notas: string | null
          orden: number
          progreso: number
          proyecto_id: string
          responsable_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          estado?: Database["public"]["Enums"]["estado_registro"]
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio?: string | null
          id?: string
          nombre: string
          notas?: string | null
          orden?: number
          progreso?: number
          proyecto_id: string
          responsable_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          estado?: Database["public"]["Enums"]["estado_registro"]
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          orden?: number
          progreso?: number
          proyecto_id?: string
          responsable_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fases_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fases_proyecto_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_tipo_proyecto: {
        Row: {
          activo: boolean
          codigo: string
          created_at: string
          descripcion: string | null
          es_obligatorio: boolean | null
          estado_defecto: string | null
          id: string
          nombre: string
          orden: number
          protegido: boolean | null
          requiere_fase_anterior: boolean | null
          tipo_proyecto_id: string
          updated_at: string
        }
        Insert: {
          activo?: boolean
          codigo: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean | null
          estado_defecto?: string | null
          id?: string
          nombre: string
          orden?: number
          protegido?: boolean | null
          requiere_fase_anterior?: boolean | null
          tipo_proyecto_id: string
          updated_at?: string
        }
        Update: {
          activo?: boolean
          codigo?: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean | null
          estado_defecto?: string | null
          id?: string
          nombre?: string
          orden?: number
          protegido?: boolean | null
          requiere_fase_anterior?: boolean | null
          tipo_proyecto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fases_tipo_proyecto_tipo_proyecto_id_fkey"
            columns: ["tipo_proyecto_id"]
            isOneToOne: false
            referencedRelation: "tipos_proyecto_config"
            referencedColumns: ["id"]
          },
        ]
      }
      fases_tipos_proyecto: {
        Row: {
          created_at: string | null
          es_obligatoria: boolean | null
          fase_id: string
          id: string
          orden: number | null
          tipo_proyecto_id: string
        }
        Insert: {
          created_at?: string | null
          es_obligatoria?: boolean | null
          fase_id: string
          id?: string
          orden?: number | null
          tipo_proyecto_id: string
        }
        Update: {
          created_at?: string | null
          es_obligatoria?: boolean | null
          fase_id?: string
          id?: string
          orden?: number | null
          tipo_proyecto_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fases_tipos_proyecto_fase_id_fkey"
            columns: ["fase_id"]
            isOneToOne: false
            referencedRelation: "fases_maestro"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fases_tipos_proyecto_tipo_proyecto_id_fkey"
            columns: ["tipo_proyecto_id"]
            isOneToOne: false
            referencedRelation: "catalogo_tipologias_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      gastos_estructurales: {
        Row: {
          activo: boolean | null
          centro_trabajo_id: string | null
          codigo: string
          created_at: string
          id: string
          importe_mensual: number
          nombre: string
          notas: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          centro_trabajo_id?: string | null
          codigo: string
          created_at?: string
          id?: string
          importe_mensual: number
          nombre: string
          notas?: string | null
          tipo: string
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          centro_trabajo_id?: string | null
          codigo?: string
          created_at?: string
          id?: string
          importe_mensual?: number
          nombre?: string
          notas?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gastos_estructurales_centro_trabajo_id_fkey"
            columns: ["centro_trabajo_id"]
            isOneToOne: false
            referencedRelation: "centros_trabajo"
            referencedColumns: ["id"]
          },
        ]
      }
      gastos_oferta_comercial: {
        Row: {
          categoria: string
          comisionista_id: string | null
          concepto: string
          created_at: string
          id: string
          importe_calculado: number | null
          importe_fijo: number | null
          oferta_id: string
          orden: number | null
          porcentaje: number | null
          tipo_calculo: string
          updated_at: string
        }
        Insert: {
          categoria: string
          comisionista_id?: string | null
          concepto: string
          created_at?: string
          id?: string
          importe_calculado?: number | null
          importe_fijo?: number | null
          oferta_id: string
          orden?: number | null
          porcentaje?: number | null
          tipo_calculo?: string
          updated_at?: string
        }
        Update: {
          categoria?: string
          comisionista_id?: string | null
          concepto?: string
          created_at?: string
          id?: string
          importe_calculado?: number | null
          importe_fijo?: number | null
          oferta_id?: string
          orden?: number | null
          porcentaje?: number | null
          tipo_calculo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gastos_oferta_comercial_comisionista_id_fkey"
            columns: ["comisionista_id"]
            isOneToOne: false
            referencedRelation: "comerciales_comisionistas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gastos_oferta_comercial_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      gates_proyecto: {
        Row: {
          created_at: string | null
          cumplido_por: string | null
          estado: string | null
          evidencia_documento_id: string | null
          evidencia_paso_id: string | null
          fecha_cumplimiento: string | null
          id: string
          notas: string | null
          proyecto_id: string
          tipo_gate_codigo: string
          tipo_gate_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          cumplido_por?: string | null
          estado?: string | null
          evidencia_documento_id?: string | null
          evidencia_paso_id?: string | null
          fecha_cumplimiento?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
          tipo_gate_codigo: string
          tipo_gate_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          cumplido_por?: string | null
          estado?: string | null
          evidencia_documento_id?: string | null
          evidencia_paso_id?: string | null
          fecha_cumplimiento?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
          tipo_gate_codigo?: string
          tipo_gate_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gates_proyecto_cumplido_por_fkey"
            columns: ["cumplido_por"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gates_proyecto_evidencia_documento_id_fkey"
            columns: ["evidencia_documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gates_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gates_proyecto_tipo_gate_id_fkey"
            columns: ["tipo_gate_id"]
            isOneToOne: false
            referencedRelation: "catalogo_tipos_gate"
            referencedColumns: ["id"]
          },
        ]
      }
      historial_configurador: {
        Row: {
          categoria_id: string | null
          configuracion_id: string | null
          created_at: string
          datos_adicionales: Json | null
          id: string
          opcion_seleccionada_id: string | null
          paso: number
        }
        Insert: {
          categoria_id?: string | null
          configuracion_id?: string | null
          created_at?: string
          datos_adicionales?: Json | null
          id?: string
          opcion_seleccionada_id?: string | null
          paso: number
        }
        Update: {
          categoria_id?: string | null
          configuracion_id?: string | null
          created_at?: string
          datos_adicionales?: Json | null
          id?: string
          opcion_seleccionada_id?: string | null
          paso?: number
        }
        Relationships: [
          {
            foreignKeyName: "historial_configurador_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_configurador"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_configurador_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_configurador_opcion_seleccionada_id_fkey"
            columns: ["opcion_seleccionada_id"]
            isOneToOne: false
            referencedRelation: "opciones_configurador"
            referencedColumns: ["id"]
          },
        ]
      }
      historial_estructura_costes: {
        Row: {
          calculado_at: string | null
          calculado_por_id: string | null
          configuracion_id: string | null
          coste_comercial: number | null
          coste_directo_fijo: number | null
          coste_directo_variable: number | null
          coste_financiero: number | null
          coste_indirecto: number | null
          coste_total: number | null
          created_at: string | null
          estructura_aplicada: Json
          id: string
          margen_aplicado: number | null
          modelo_id: string | null
          notas: string | null
          precio_venta_calculado: number | null
          proyecto_id: string | null
        }
        Insert: {
          calculado_at?: string | null
          calculado_por_id?: string | null
          configuracion_id?: string | null
          coste_comercial?: number | null
          coste_directo_fijo?: number | null
          coste_directo_variable?: number | null
          coste_financiero?: number | null
          coste_indirecto?: number | null
          coste_total?: number | null
          created_at?: string | null
          estructura_aplicada: Json
          id?: string
          margen_aplicado?: number | null
          modelo_id?: string | null
          notas?: string | null
          precio_venta_calculado?: number | null
          proyecto_id?: string | null
        }
        Update: {
          calculado_at?: string | null
          calculado_por_id?: string | null
          configuracion_id?: string | null
          coste_comercial?: number | null
          coste_directo_fijo?: number | null
          coste_directo_variable?: number | null
          coste_financiero?: number | null
          coste_indirecto?: number | null
          coste_total?: number | null
          created_at?: string | null
          estructura_aplicada?: Json
          id?: string
          margen_aplicado?: number | null
          modelo_id?: string | null
          notas?: string | null
          precio_venta_calculado?: number | null
          proyecto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "historial_estructura_costes_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_estructura_costes_modelo_id_fkey"
            columns: ["modelo_id"]
            isOneToOne: false
            referencedRelation: "modelos_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_estructura_costes_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      historico_costos: {
        Row: {
          campo_modificado: string | null
          created_at: string
          datos_contexto: Json | null
          entidad_codigo: string | null
          entidad_id: string
          entidad_nombre: string | null
          entidad_tipo: Database["public"]["Enums"]["tipo_entidad_coste"]
          evento: Database["public"]["Enums"]["tipo_evento_coste"]
          id: string
          motivo: string | null
          periodo_anio: number | null
          periodo_mes: number | null
          proyecto_id: string | null
          usuario_id: string | null
          valor_anterior: number | null
          valor_nuevo: number | null
        }
        Insert: {
          campo_modificado?: string | null
          created_at?: string
          datos_contexto?: Json | null
          entidad_codigo?: string | null
          entidad_id: string
          entidad_nombre?: string | null
          entidad_tipo: Database["public"]["Enums"]["tipo_entidad_coste"]
          evento?: Database["public"]["Enums"]["tipo_evento_coste"]
          id?: string
          motivo?: string | null
          periodo_anio?: number | null
          periodo_mes?: number | null
          proyecto_id?: string | null
          usuario_id?: string | null
          valor_anterior?: number | null
          valor_nuevo?: number | null
        }
        Update: {
          campo_modificado?: string | null
          created_at?: string
          datos_contexto?: Json | null
          entidad_codigo?: string | null
          entidad_id?: string
          entidad_nombre?: string | null
          entidad_tipo?: Database["public"]["Enums"]["tipo_entidad_coste"]
          evento?: Database["public"]["Enums"]["tipo_evento_coste"]
          id?: string
          motivo?: string | null
          periodo_anio?: number | null
          periodo_mes?: number | null
          proyecto_id?: string | null
          usuario_id?: string | null
          valor_anterior?: number | null
          valor_nuevo?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "historico_costos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      historico_ofertas: {
        Row: {
          cierre_comercial: string | null
          cliente_id: string
          codigo_oferta: string
          creado_por_id: string | null
          created_at: string
          documento_contrato_id: string | null
          documento_oferta_id: string | null
          estado: string
          fecha_cierre_comercial: string | null
          fecha_envio: string | null
          fecha_oferta: string
          fecha_respuesta: string | null
          fecha_validez: string | null
          id: string
          importe_mano_obra: number | null
          importe_materiales: number | null
          importe_total: number | null
          margen_aplicado: number | null
          motivo_rechazo: string | null
          notas: string | null
          proyecto_id: string
          updated_at: string
          version: number
        }
        Insert: {
          cierre_comercial?: string | null
          cliente_id: string
          codigo_oferta: string
          creado_por_id?: string | null
          created_at?: string
          documento_contrato_id?: string | null
          documento_oferta_id?: string | null
          estado?: string
          fecha_cierre_comercial?: string | null
          fecha_envio?: string | null
          fecha_oferta?: string
          fecha_respuesta?: string | null
          fecha_validez?: string | null
          id?: string
          importe_mano_obra?: number | null
          importe_materiales?: number | null
          importe_total?: number | null
          margen_aplicado?: number | null
          motivo_rechazo?: string | null
          notas?: string | null
          proyecto_id: string
          updated_at?: string
          version?: number
        }
        Update: {
          cierre_comercial?: string | null
          cliente_id?: string
          codigo_oferta?: string
          creado_por_id?: string | null
          created_at?: string
          documento_contrato_id?: string | null
          documento_oferta_id?: string | null
          estado?: string
          fecha_cierre_comercial?: string | null
          fecha_envio?: string | null
          fecha_oferta?: string
          fecha_respuesta?: string | null
          fecha_validez?: string | null
          id?: string
          importe_mano_obra?: number | null
          importe_materiales?: number | null
          importe_total?: number | null
          margen_aplicado?: number | null
          motivo_rechazo?: string | null
          notas?: string | null
          proyecto_id?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "historico_ofertas_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_ofertas_creado_por_id_fkey"
            columns: ["creado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_ofertas_documento_contrato_id_fkey"
            columns: ["documento_contrato_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_ofertas_documento_oferta_id_fkey"
            columns: ["documento_oferta_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_ofertas_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      id_sequences: {
        Row: {
          current_seq: number
          id: string
          name_code: string
          prefix: string
          year_code: string
        }
        Insert: {
          current_seq?: number
          id?: string
          name_code: string
          prefix: string
          year_code: string
        }
        Update: {
          current_seq?: number
          id?: string
          name_code?: string
          prefix?: string
          year_code?: string
        }
        Relationships: []
      }
      importaciones: {
        Row: {
          archivo_nombre: string
          created_at: string | null
          errores: Json | null
          id: string
          importado_por_id: string | null
          mapeo_campos: Json | null
          origen_datos: string | null
          registros_actualizados: number | null
          registros_error: number | null
          registros_importados: number | null
          registros_totales: number | null
          tipo: string
        }
        Insert: {
          archivo_nombre: string
          created_at?: string | null
          errores?: Json | null
          id?: string
          importado_por_id?: string | null
          mapeo_campos?: Json | null
          origen_datos?: string | null
          registros_actualizados?: number | null
          registros_error?: number | null
          registros_importados?: number | null
          registros_totales?: number | null
          tipo: string
        }
        Update: {
          archivo_nombre?: string
          created_at?: string | null
          errores?: Json | null
          id?: string
          importado_por_id?: string | null
          mapeo_campos?: Json | null
          origen_datos?: string | null
          registros_actualizados?: number | null
          registros_error?: number | null
          registros_importados?: number | null
          registros_totales?: number | null
          tipo?: string
        }
        Relationships: []
      }
      imputacion_horas: {
        Row: {
          articulo_mo_id: string
          created_at: string | null
          created_by: string | null
          fecha: string
          horas: number
          id: string
          notas: string | null
          operario_id: string | null
          operario_nombre: string | null
          orden_produccion_id: string
        }
        Insert: {
          articulo_mo_id: string
          created_at?: string | null
          created_by?: string | null
          fecha?: string
          horas: number
          id?: string
          notas?: string | null
          operario_id?: string | null
          operario_nombre?: string | null
          orden_produccion_id: string
        }
        Update: {
          articulo_mo_id?: string
          created_at?: string | null
          created_by?: string | null
          fecha?: string
          horas?: number
          id?: string
          notas?: string | null
          operario_id?: string | null
          operario_nombre?: string | null
          orden_produccion_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "imputacion_horas_operario_id_fkey"
            columns: ["operario_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "imputacion_horas_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "orden_produccion_maestro"
            referencedColumns: ["id"]
          },
        ]
      }
      imputacion_horas_centro: {
        Row: {
          centro_trabajo_id: string
          coste_hora: number | null
          coste_total: number | null
          created_at: string | null
          fecha: string
          horas: number
          id: string
          notas: string | null
          trabajador_id: string
          updated_at: string | null
        }
        Insert: {
          centro_trabajo_id: string
          coste_hora?: number | null
          coste_total?: number | null
          created_at?: string | null
          fecha?: string
          horas?: number
          id?: string
          notas?: string | null
          trabajador_id: string
          updated_at?: string | null
        }
        Update: {
          centro_trabajo_id?: string
          coste_hora?: number | null
          coste_total?: number | null
          created_at?: string | null
          fecha?: string
          horas?: number
          id?: string
          notas?: string | null
          trabajador_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "imputacion_horas_centro_centro_trabajo_id_fkey"
            columns: ["centro_trabajo_id"]
            isOneToOne: false
            referencedRelation: "centros_trabajo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "imputacion_horas_centro_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      imputaciones_estructurales: {
        Row: {
          created_at: string
          gasto_id: string
          id: string
          importe: number
          periodo: string
          porcentaje_imputacion: number | null
          proyecto_id: string | null
        }
        Insert: {
          created_at?: string
          gasto_id: string
          id?: string
          importe: number
          periodo: string
          porcentaje_imputacion?: number | null
          proyecto_id?: string | null
        }
        Update: {
          created_at?: string
          gasto_id?: string
          id?: string
          importe?: number
          periodo?: string
          porcentaje_imputacion?: number | null
          proyecto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "imputaciones_estructurales_gasto_id_fkey"
            columns: ["gasto_id"]
            isOneToOne: false
            referencedRelation: "gastos_estructurales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "imputaciones_estructurales_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      incidencias_popup: {
        Row: {
          created_at: string
          descripcion: string | null
          entrada_diaria_id: string | null
          fecha_incidencia: string
          id: string
          notas_resolucion: string | null
          resuelto: boolean | null
          tiempo_popup_segundos: number | null
          tipo: string
          user_id: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          entrada_diaria_id?: string | null
          fecha_incidencia?: string
          id?: string
          notas_resolucion?: string | null
          resuelto?: boolean | null
          tiempo_popup_segundos?: number | null
          tipo: string
          user_id: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          entrada_diaria_id?: string | null
          fecha_incidencia?: string
          id?: string
          notas_resolucion?: string | null
          resuelto?: boolean | null
          tiempo_popup_segundos?: number | null
          tipo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "incidencias_popup_entrada_diaria_id_fkey"
            columns: ["entrada_diaria_id"]
            isOneToOne: false
            referencedRelation: "entradas_diarias"
            referencedColumns: ["id"]
          },
        ]
      }
      incidencias_produccion: {
        Row: {
          created_at: string
          descripcion: string
          fecha_resolucion: string | null
          gravedad: string
          id: string
          orden_id: string
          reportado_por_id: string | null
          resolucion: string | null
          resuelto: boolean | null
          resuelto_por_id: string | null
          tarea_id: string | null
          tipo: string
        }
        Insert: {
          created_at?: string
          descripcion: string
          fecha_resolucion?: string | null
          gravedad?: string
          id?: string
          orden_id: string
          reportado_por_id?: string | null
          resolucion?: string | null
          resuelto?: boolean | null
          resuelto_por_id?: string | null
          tarea_id?: string | null
          tipo: string
        }
        Update: {
          created_at?: string
          descripcion?: string
          fecha_resolucion?: string | null
          gravedad?: string
          id?: string
          orden_id?: string
          reportado_por_id?: string | null
          resolucion?: string | null
          resuelto?: boolean | null
          resuelto_por_id?: string | null
          tarea_id?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "incidencias_produccion_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidencias_produccion_reportado_por_id_fkey"
            columns: ["reportado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidencias_produccion_resuelto_por_id_fkey"
            columns: ["resuelto_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidencias_produccion_tarea_id_fkey"
            columns: ["tarea_id"]
            isOneToOne: false
            referencedRelation: "tareas_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      incidencias_subcontrata: {
        Row: {
          created_at: string
          descripcion: string | null
          dias_retraso: number | null
          estado: string
          fecha_resolucion: string | null
          id: string
          impacto_economico: number | null
          resolucion: string | null
          severidad: string
          subcontrata_proyecto_id: string
          tipo: string
          titulo: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          dias_retraso?: number | null
          estado?: string
          fecha_resolucion?: string | null
          id?: string
          impacto_economico?: number | null
          resolucion?: string | null
          severidad?: string
          subcontrata_proyecto_id: string
          tipo?: string
          titulo: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          dias_retraso?: number | null
          estado?: string
          fecha_resolucion?: string | null
          id?: string
          impacto_economico?: number | null
          resolucion?: string | null
          severidad?: string
          subcontrata_proyecto_id?: string
          tipo?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "incidencias_subcontrata_subcontrata_proyecto_id_fkey"
            columns: ["subcontrata_proyecto_id"]
            isOneToOne: false
            referencedRelation: "subcontratas_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      informes_urbanisticos: {
        Row: {
          altura_maxima_m: number
          cliente_id: string | null
          codigo: string
          codigo_postal: string | null
          condiciones_especiales: string | null
          configuracion_id: string | null
          created_at: string
          direccion_parcela: string
          documento_soporte_id: string | null
          edificabilidad_m2t: number
          estado: string
          fecha_validacion: string | null
          id: string
          municipio: string
          normativa_aplicable: string | null
          observaciones: string | null
          ocupacion_maxima_porcentaje: number
          plantas_maximas: number
          provincia: string
          referencia_catastral: string | null
          retranqueo_frontal_m: number | null
          retranqueo_lateral_m: number | null
          retranqueo_trasero_m: number | null
          servidumbres: string | null
          superficie_max_construible_m2: number | null
          superficie_ocupable_m2: number | null
          superficie_parcela_m2: number
          updated_at: string
          validado_por_id: string | null
        }
        Insert: {
          altura_maxima_m: number
          cliente_id?: string | null
          codigo: string
          codigo_postal?: string | null
          condiciones_especiales?: string | null
          configuracion_id?: string | null
          created_at?: string
          direccion_parcela: string
          documento_soporte_id?: string | null
          edificabilidad_m2t: number
          estado?: string
          fecha_validacion?: string | null
          id?: string
          municipio: string
          normativa_aplicable?: string | null
          observaciones?: string | null
          ocupacion_maxima_porcentaje: number
          plantas_maximas: number
          provincia: string
          referencia_catastral?: string | null
          retranqueo_frontal_m?: number | null
          retranqueo_lateral_m?: number | null
          retranqueo_trasero_m?: number | null
          servidumbres?: string | null
          superficie_max_construible_m2?: number | null
          superficie_ocupable_m2?: number | null
          superficie_parcela_m2: number
          updated_at?: string
          validado_por_id?: string | null
        }
        Update: {
          altura_maxima_m?: number
          cliente_id?: string | null
          codigo?: string
          codigo_postal?: string | null
          condiciones_especiales?: string | null
          configuracion_id?: string | null
          created_at?: string
          direccion_parcela?: string
          documento_soporte_id?: string | null
          edificabilidad_m2t?: number
          estado?: string
          fecha_validacion?: string | null
          id?: string
          municipio?: string
          normativa_aplicable?: string | null
          observaciones?: string | null
          ocupacion_maxima_porcentaje?: number
          plantas_maximas?: number
          provincia?: string
          referencia_catastral?: string | null
          retranqueo_frontal_m?: number | null
          retranqueo_lateral_m?: number | null
          retranqueo_trasero_m?: number | null
          servidumbres?: string | null
          superficie_max_construible_m2?: number | null
          superficie_ocupable_m2?: number | null
          superficie_parcela_m2?: number
          updated_at?: string
          validado_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "informes_urbanisticos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "informes_urbanisticos_configuracion_id_fkey"
            columns: ["configuracion_id"]
            isOneToOne: false
            referencedRelation: "configuraciones_vivienda"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "informes_urbanisticos_documento_soporte_id_fkey"
            columns: ["documento_soporte_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "informes_urbanisticos_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      instalaciones: {
        Row: {
          codigo: string
          created_at: string
          descripcion: string | null
          direccion_obra: string | null
          equipo_asignado: string[] | null
          estado: Database["public"]["Enums"]["estado_instalacion"]
          fecha_fin_prevista: string | null
          fecha_fin_real: string | null
          fecha_inicio_prevista: string | null
          fecha_inicio_real: string | null
          horas_estimadas: number | null
          horas_reales: number | null
          id: string
          localidad_obra: string | null
          nombre: string
          observaciones: string | null
          progreso: number | null
          provincia_obra: string | null
          proyecto_id: string
          responsable_id: string | null
          updated_at: string
          vehiculos: string | null
        }
        Insert: {
          codigo: string
          created_at?: string
          descripcion?: string | null
          direccion_obra?: string | null
          equipo_asignado?: string[] | null
          estado?: Database["public"]["Enums"]["estado_instalacion"]
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_prevista?: string | null
          fecha_inicio_real?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          localidad_obra?: string | null
          nombre: string
          observaciones?: string | null
          progreso?: number | null
          provincia_obra?: string | null
          proyecto_id: string
          responsable_id?: string | null
          updated_at?: string
          vehiculos?: string | null
        }
        Update: {
          codigo?: string
          created_at?: string
          descripcion?: string | null
          direccion_obra?: string | null
          equipo_asignado?: string[] | null
          estado?: Database["public"]["Enums"]["estado_instalacion"]
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_prevista?: string | null
          fecha_inicio_real?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          localidad_obra?: string | null
          nombre?: string
          observaciones?: string | null
          progreso?: number | null
          provincia_obra?: string | null
          proyecto_id?: string
          responsable_id?: string | null
          updated_at?: string
          vehiculos?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "instalaciones_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "instalaciones_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_contrato: {
        Row: {
          cantidad: number | null
          codigo: string | null
          contrato_id: string
          created_at: string
          descripcion: string
          id: string
          linea_oferta_id: string | null
          orden: number | null
          precio_linea: number | null
          precio_unitario: number | null
          unidad: string | null
        }
        Insert: {
          cantidad?: number | null
          codigo?: string | null
          contrato_id: string
          created_at?: string
          descripcion: string
          id?: string
          linea_oferta_id?: string | null
          orden?: number | null
          precio_linea?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Update: {
          cantidad?: number | null
          codigo?: string | null
          contrato_id?: string
          created_at?: string
          descripcion?: string
          id?: string
          linea_oferta_id?: string | null
          orden?: number | null
          precio_linea?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_contrato_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_descompuesto: {
        Row: {
          alcance_id: string | null
          cantidad: number
          capitulo: string
          concepto: string
          coste_estimado: number | null
          created_at: string
          descripcion: string | null
          destino_compras: boolean | null
          destino_instalacion: boolean | null
          destino_produccion: boolean | null
          id: string
          importe: number | null
          margen_linea: number | null
          oferta_id: string
          orden: number
          precio_unitario: number
          proveedor_sugerido_id: string | null
          subcapitulo: string | null
          unidad: string
        }
        Insert: {
          alcance_id?: string | null
          cantidad?: number
          capitulo: string
          concepto: string
          coste_estimado?: number | null
          created_at?: string
          descripcion?: string | null
          destino_compras?: boolean | null
          destino_instalacion?: boolean | null
          destino_produccion?: boolean | null
          id?: string
          importe?: number | null
          margen_linea?: number | null
          oferta_id: string
          orden?: number
          precio_unitario?: number
          proveedor_sugerido_id?: string | null
          subcapitulo?: string | null
          unidad?: string
        }
        Update: {
          alcance_id?: string | null
          cantidad?: number
          capitulo?: string
          concepto?: string
          coste_estimado?: number | null
          created_at?: string
          descripcion?: string | null
          destino_compras?: boolean | null
          destino_instalacion?: boolean | null
          destino_produccion?: boolean | null
          id?: string
          importe?: number | null
          margen_linea?: number | null
          oferta_id?: string
          orden?: number
          precio_unitario?: number
          proveedor_sugerido_id?: string | null
          subcapitulo?: string | null
          unidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "lineas_descompuesto_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_descompuesto_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_abante"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_descompuesto_proveedor_sugerido_id_fkey"
            columns: ["proveedor_sugerido_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_dietas_ee: {
        Row: {
          coste_total: number | null
          created_at: string | null
          created_by: string | null
          dias_estancia: number
          id: string
          importe_dieta_dia: number
          incluye_alojamiento: boolean | null
          notas: string | null
          proyecto_estructura_id: string
          trabajador_descripcion: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          dias_estancia?: number
          id?: string
          importe_dieta_dia?: number
          incluye_alojamiento?: boolean | null
          notas?: string | null
          proyecto_estructura_id: string
          trabajador_descripcion: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          dias_estancia?: number
          id?: string
          importe_dieta_dia?: number
          incluye_alojamiento?: boolean | null
          notas?: string | null
          proyecto_estructura_id?: string
          trabajador_descripcion?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_dietas_ee_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_dietas_proyecto: {
        Row: {
          configuracion_dieta_id: string | null
          coste_total: number | null
          created_at: string | null
          descripcion: string
          id: string
          importe_dia: number
          notas: string | null
          num_dias: number | null
          num_personas: number | null
          proyecto_estructura_id: string
          tipo_dieta: string | null
          updated_at: string | null
        }
        Insert: {
          configuracion_dieta_id?: string | null
          coste_total?: number | null
          created_at?: string | null
          descripcion: string
          id?: string
          importe_dia: number
          notas?: string | null
          num_dias?: number | null
          num_personas?: number | null
          proyecto_estructura_id: string
          tipo_dieta?: string | null
          updated_at?: string | null
        }
        Update: {
          configuracion_dieta_id?: string | null
          coste_total?: number | null
          created_at?: string | null
          descripcion?: string
          id?: string
          importe_dia?: number
          notas?: string | null
          num_dias?: number | null
          num_personas?: number | null
          proyecto_estructura_id?: string
          tipo_dieta?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_dietas_proyecto_configuracion_dieta_id_fkey"
            columns: ["configuracion_dieta_id"]
            isOneToOne: false
            referencedRelation: "configuracion_dietas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_dietas_proyecto_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_estructurales_ee: {
        Row: {
          base_calculo: string | null
          concepto: string
          created_at: string | null
          created_by: string | null
          id: string
          importe_calculado: number
          importe_fijo: number | null
          notas: string | null
          porcentaje: number | null
          proyecto_estructura_id: string
          tipo_calculo: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          base_calculo?: string | null
          concepto: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          importe_calculado?: number
          importe_fijo?: number | null
          notas?: string | null
          porcentaje?: number | null
          proyecto_estructura_id: string
          tipo_calculo?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          base_calculo?: string | null
          concepto?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          importe_calculado?: number
          importe_fijo?: number | null
          notas?: string | null
          porcentaje?: number | null
          proyecto_estructura_id?: string
          tipo_calculo?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_estructurales_ee_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_gastos_estructurales_proyecto: {
        Row: {
          base_calculo: string | null
          concepto: string
          created_at: string | null
          gasto_estructural_id: string | null
          id: string
          importe_calculado: number | null
          importe_fijo: number | null
          notas: string | null
          porcentaje: number | null
          proyecto_estructura_id: string
          tipo_calculo: string | null
          updated_at: string | null
        }
        Insert: {
          base_calculo?: string | null
          concepto: string
          created_at?: string | null
          gasto_estructural_id?: string | null
          id?: string
          importe_calculado?: number | null
          importe_fijo?: number | null
          notas?: string | null
          porcentaje?: number | null
          proyecto_estructura_id: string
          tipo_calculo?: string | null
          updated_at?: string | null
        }
        Update: {
          base_calculo?: string | null
          concepto?: string
          created_at?: string | null
          gasto_estructural_id?: string | null
          id?: string
          importe_calculado?: number | null
          importe_fijo?: number | null
          notas?: string | null
          porcentaje?: number | null
          proyecto_estructura_id?: string
          tipo_calculo?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_gastos_estructurales_proyect_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_gastos_estructurales_proyecto_gasto_estructural_id_fkey"
            columns: ["gasto_estructural_id"]
            isOneToOne: false
            referencedRelation: "gastos_estructurales"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_mano_obra_ee: {
        Row: {
          cantidad_dias: number
          cantidad_horas: number
          cantidad_personas: number
          categoria_id: string | null
          coste_hora: number
          coste_total: number | null
          created_at: string | null
          created_by: string | null
          descripcion: string
          id: string
          notas: string | null
          proyecto_estructura_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          cantidad_dias?: number
          cantidad_horas?: number
          cantidad_personas?: number
          categoria_id?: string | null
          coste_hora?: number
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion: string
          id?: string
          notas?: string | null
          proyecto_estructura_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          cantidad_dias?: number
          cantidad_horas?: number
          cantidad_personas?: number
          categoria_id?: string | null
          coste_hora?: number
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string
          id?: string
          notas?: string | null
          proyecto_estructura_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_mano_obra_ee_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_mano_obra"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_mano_obra_ee_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_mano_obra_proyecto: {
        Row: {
          cantidad_horas: number | null
          cantidad_jornadas: number | null
          categoria_id: string | null
          categoria_manual: string | null
          coste_hora: number
          coste_total: number | null
          created_at: string | null
          descripcion: string
          id: string
          incluye_dieta: boolean | null
          notas: string | null
          num_trabajadores: number | null
          proyecto_estructura_id: string
          rendimiento: number | null
          updated_at: string | null
        }
        Insert: {
          cantidad_horas?: number | null
          cantidad_jornadas?: number | null
          categoria_id?: string | null
          categoria_manual?: string | null
          coste_hora: number
          coste_total?: number | null
          created_at?: string | null
          descripcion: string
          id?: string
          incluye_dieta?: boolean | null
          notas?: string | null
          num_trabajadores?: number | null
          proyecto_estructura_id: string
          rendimiento?: number | null
          updated_at?: string | null
        }
        Update: {
          cantidad_horas?: number | null
          cantidad_jornadas?: number | null
          categoria_id?: string | null
          categoria_manual?: string | null
          coste_hora?: number
          coste_total?: number | null
          created_at?: string | null
          descripcion?: string
          id?: string
          incluye_dieta?: boolean | null
          notas?: string | null
          num_trabajadores?: number | null
          proyecto_estructura_id?: string
          rendimiento?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_mano_obra_proyecto_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_mano_obra"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_mano_obra_proyecto_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_maquinaria_ee: {
        Row: {
          cantidad: number
          coste_dia: number
          coste_total: number | null
          created_at: string | null
          created_by: string | null
          descripcion: string
          dias_uso: number
          id: string
          maquinaria_id: string | null
          notas: string | null
          proyecto_estructura_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          cantidad?: number
          coste_dia?: number
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion: string
          dias_uso?: number
          id?: string
          maquinaria_id?: string | null
          notas?: string | null
          proyecto_estructura_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          cantidad?: number
          coste_dia?: number
          coste_total?: number | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string
          dias_uso?: number
          id?: string
          maquinaria_id?: string | null
          notas?: string | null
          proyecto_estructura_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_maquinaria_ee_maquinaria_id_fkey"
            columns: ["maquinaria_id"]
            isOneToOne: false
            referencedRelation: "maquinaria_medios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_maquinaria_ee_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_maquinaria_proyecto: {
        Row: {
          alcance_metros: number | null
          cantidad: number | null
          coste_total: number | null
          coste_unitario: number
          created_at: string | null
          descripcion: string
          id: string
          maquinaria_id: string | null
          notas: string | null
          proyecto_estructura_id: string
          tipo: string
          unidad: string | null
          updated_at: string | null
        }
        Insert: {
          alcance_metros?: number | null
          cantidad?: number | null
          coste_total?: number | null
          coste_unitario: number
          created_at?: string | null
          descripcion: string
          id?: string
          maquinaria_id?: string | null
          notas?: string | null
          proyecto_estructura_id: string
          tipo: string
          unidad?: string | null
          updated_at?: string | null
        }
        Update: {
          alcance_metros?: number | null
          cantidad?: number | null
          coste_total?: number | null
          coste_unitario?: number
          created_at?: string | null
          descripcion?: string
          id?: string
          maquinaria_id?: string | null
          notas?: string | null
          proyecto_estructura_id?: string
          tipo?: string
          unidad?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_maquinaria_proyecto_maquinaria_id_fkey"
            columns: ["maquinaria_id"]
            isOneToOne: false
            referencedRelation: "maquinaria_medios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_maquinaria_proyecto_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_oferta_comercial: {
        Row: {
          cantidad: number | null
          capitulo_codigo: string | null
          capitulo_nombre: string | null
          codigo: string | null
          created_at: string
          descripcion: string
          descuento_linea_pct: number | null
          id: string
          nivel_jerarquico: number | null
          notas: string | null
          oferta_id: string
          orden: number | null
          origen: string
          origen_archivo: string | null
          origen_id: string | null
          precio_linea: number | null
          precio_unitario: number | null
          unidad: string | null
          updated_at: string
        }
        Insert: {
          cantidad?: number | null
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          codigo?: string | null
          created_at?: string
          descripcion: string
          descuento_linea_pct?: number | null
          id?: string
          nivel_jerarquico?: number | null
          notas?: string | null
          oferta_id: string
          orden?: number | null
          origen: string
          origen_archivo?: string | null
          origen_id?: string | null
          precio_linea?: number | null
          precio_unitario?: number | null
          unidad?: string | null
          updated_at?: string
        }
        Update: {
          cantidad?: number | null
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          codigo?: string | null
          created_at?: string
          descripcion?: string
          descuento_linea_pct?: number | null
          id?: string
          nivel_jerarquico?: number | null
          notas?: string | null
          oferta_id?: string
          orden?: number | null
          origen?: string
          origen_archivo?: string | null
          origen_id?: string | null
          precio_linea?: number | null
          precio_unitario?: number | null
          unidad?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lineas_oferta_comercial_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_oferta_proveedor: {
        Row: {
          cantidad: number | null
          codigo: string | null
          created_at: string
          descripcion: string
          id: string
          oferta_id: string
          orden: number | null
          precio_total: number | null
          precio_unitario: number | null
          unidad: string | null
        }
        Insert: {
          cantidad?: number | null
          codigo?: string | null
          created_at?: string
          descripcion: string
          id?: string
          oferta_id: string
          orden?: number | null
          precio_total?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Update: {
          cantidad?: number | null
          codigo?: string | null
          created_at?: string
          descripcion?: string
          id?: string
          oferta_id?: string
          orden?: number | null
          precio_total?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_oferta_proveedor_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_proveedor_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_oferta_proyecto: {
        Row: {
          articulo_id: string
          cantidad: number
          capitulo: string | null
          created_at: string
          horas_calculadas: number | null
          id: string
          notas: string | null
          orden: number | null
          precio_total: number | null
          precio_unitario: number
          proyecto_id: string
          subcapitulo: string | null
          updated_at: string
        }
        Insert: {
          articulo_id: string
          cantidad?: number
          capitulo?: string | null
          created_at?: string
          horas_calculadas?: number | null
          id?: string
          notas?: string | null
          orden?: number | null
          precio_total?: number | null
          precio_unitario?: number
          proyecto_id: string
          subcapitulo?: string | null
          updated_at?: string
        }
        Update: {
          articulo_id?: string
          cantidad?: number
          capitulo?: string | null
          created_at?: string
          horas_calculadas?: number | null
          id?: string
          notas?: string | null
          orden?: number | null
          precio_total?: number | null
          precio_unitario?: number
          proyecto_id?: string
          subcapitulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lineas_oferta_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_pedido: {
        Row: {
          articulo_id: string | null
          articulo_partida_id: string | null
          cantidad: number
          cantidad_recibida: number
          cantidad_total_partida: number | null
          created_at: string
          descripcion: string
          descuento_porcentaje: number | null
          distribucion_edificios: Json | null
          es_parcial: boolean | null
          estado: Database["public"]["Enums"]["estado_linea_pedido"]
          fecha_entrega_prevista: string | null
          id: string
          importe: number
          notas: string | null
          orden: number
          pedido_id: string
          precio_unitario: number
          unidad: string
          updated_at: string
        }
        Insert: {
          articulo_id?: string | null
          articulo_partida_id?: string | null
          cantidad: number
          cantidad_recibida?: number
          cantidad_total_partida?: number | null
          created_at?: string
          descripcion: string
          descuento_porcentaje?: number | null
          distribucion_edificios?: Json | null
          es_parcial?: boolean | null
          estado?: Database["public"]["Enums"]["estado_linea_pedido"]
          fecha_entrega_prevista?: string | null
          id?: string
          importe: number
          notas?: string | null
          orden?: number
          pedido_id: string
          precio_unitario: number
          unidad?: string
          updated_at?: string
        }
        Update: {
          articulo_id?: string | null
          articulo_partida_id?: string | null
          cantidad?: number
          cantidad_recibida?: number
          cantidad_total_partida?: number | null
          created_at?: string
          descripcion?: string
          descuento_porcentaje?: number | null
          distribucion_edificios?: Json | null
          es_parcial?: boolean | null
          estado?: Database["public"]["Enums"]["estado_linea_pedido"]
          fecha_entrega_prevista?: string | null
          id?: string
          importe?: number
          notas?: string | null
          orden?: number
          pedido_id?: string
          precio_unitario?: number
          unidad?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lineas_pedido_articulo_partida_id_fkey"
            columns: ["articulo_partida_id"]
            isOneToOne: false
            referencedRelation: "compras_articulo_partida"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_pedido_pedido_id_fkey"
            columns: ["pedido_id"]
            isOneToOne: false
            referencedRelation: "pedidos"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_presto_proyecto: {
        Row: {
          archivo_origen: string | null
          cantidad_presupuestada: number | null
          cantidad_real: number | null
          capitulo_codigo: string | null
          capitulo_nombre: string | null
          capitulo_proyecto_id: string | null
          codigo: string
          codigo_padre: string | null
          created_at: string
          descripcion: string
          descripcion_larga: string | null
          familia: string | null
          fila_origen: number | null
          id: string
          importacion_id: string | null
          nivel: number | null
          nivel_presentacion: number | null
          notas: string | null
          orden: number | null
          precio_objetivo: number | null
          precio_unitario: number | null
          proyecto_id: string
          subfamilia1: string | null
          subfamilia2: string | null
          tipo: string
          total_linea_presupuesto: number | null
          total_linea_real: number | null
          unidad: string | null
          updated_at: string
          visible: boolean | null
        }
        Insert: {
          archivo_origen?: string | null
          cantidad_presupuestada?: number | null
          cantidad_real?: number | null
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          capitulo_proyecto_id?: string | null
          codigo: string
          codigo_padre?: string | null
          created_at?: string
          descripcion: string
          descripcion_larga?: string | null
          familia?: string | null
          fila_origen?: number | null
          id?: string
          importacion_id?: string | null
          nivel?: number | null
          nivel_presentacion?: number | null
          notas?: string | null
          orden?: number | null
          precio_objetivo?: number | null
          precio_unitario?: number | null
          proyecto_id: string
          subfamilia1?: string | null
          subfamilia2?: string | null
          tipo?: string
          total_linea_presupuesto?: number | null
          total_linea_real?: number | null
          unidad?: string | null
          updated_at?: string
          visible?: boolean | null
        }
        Update: {
          archivo_origen?: string | null
          cantidad_presupuestada?: number | null
          cantidad_real?: number | null
          capitulo_codigo?: string | null
          capitulo_nombre?: string | null
          capitulo_proyecto_id?: string | null
          codigo?: string
          codigo_padre?: string | null
          created_at?: string
          descripcion?: string
          descripcion_larga?: string | null
          familia?: string | null
          fila_origen?: number | null
          id?: string
          importacion_id?: string | null
          nivel?: number | null
          nivel_presentacion?: number | null
          notas?: string | null
          orden?: number | null
          precio_objetivo?: number | null
          precio_unitario?: number | null
          proyecto_id?: string
          subfamilia1?: string | null
          subfamilia2?: string | null
          tipo?: string
          total_linea_presupuesto?: number | null
          total_linea_real?: number | null
          unidad?: string | null
          updated_at?: string
          visible?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_presto_proyecto_capitulo_proyecto_id_fkey"
            columns: ["capitulo_proyecto_id"]
            isOneToOne: false
            referencedRelation: "capitulos_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_presto_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_proveedores_ee: {
        Row: {
          adjudicado: boolean | null
          created_at: string | null
          created_by: string | null
          descripcion: string
          id: string
          importe_oferta: number
          notas: string | null
          partida: string | null
          proveedor_id: string | null
          proyecto_estructura_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          adjudicado?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descripcion: string
          id?: string
          importe_oferta?: number
          notas?: string | null
          partida?: string | null
          proveedor_id?: string | null
          proyecto_estructura_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          adjudicado?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descripcion?: string
          id?: string
          importe_oferta?: number
          notas?: string | null
          partida?: string | null
          proveedor_id?: string | null
          proyecto_estructura_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lineas_proveedores_ee_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_proveedores_ee_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      lineas_recepcion: {
        Row: {
          cantidad_recibida: number
          conforme: boolean | null
          created_at: string
          edificio_id: string | null
          id: string
          linea_pedido_id: string
          observaciones: string | null
          recepcion_id: string
        }
        Insert: {
          cantidad_recibida: number
          conforme?: boolean | null
          created_at?: string
          edificio_id?: string | null
          id?: string
          linea_pedido_id: string
          observaciones?: string | null
          recepcion_id: string
        }
        Update: {
          cantidad_recibida?: number
          conforme?: boolean | null
          created_at?: string
          edificio_id?: string | null
          id?: string
          linea_pedido_id?: string
          observaciones?: string | null
          recepcion_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lineas_recepcion_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_recepcion_linea_pedido_id_fkey"
            columns: ["linea_pedido_id"]
            isOneToOne: false
            referencedRelation: "lineas_pedido"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lineas_recepcion_recepcion_id_fkey"
            columns: ["recepcion_id"]
            isOneToOne: false
            referencedRelation: "recepciones"
            referencedColumns: ["id"]
          },
        ]
      }
      liquidaciones_comisiones: {
        Row: {
          codigo: string
          comercial_id: string
          created_at: string | null
          created_by: string | null
          estado: string | null
          fecha_liquidacion: string
          fecha_pago: string | null
          id: string
          importe_total: number
          metodo_pago: string | null
          notas: string | null
          periodo_desde: string | null
          periodo_hasta: string | null
          referencia_pago: string | null
          updated_at: string | null
        }
        Insert: {
          codigo: string
          comercial_id: string
          created_at?: string | null
          created_by?: string | null
          estado?: string | null
          fecha_liquidacion?: string
          fecha_pago?: string | null
          id?: string
          importe_total?: number
          metodo_pago?: string | null
          notas?: string | null
          periodo_desde?: string | null
          periodo_hasta?: string | null
          referencia_pago?: string | null
          updated_at?: string | null
        }
        Update: {
          codigo?: string
          comercial_id?: string
          created_at?: string | null
          created_by?: string | null
          estado?: string | null
          fecha_liquidacion?: string
          fecha_pago?: string | null
          id?: string
          importe_total?: number
          metodo_pago?: string | null
          notas?: string | null
          periodo_desde?: string | null
          periodo_hasta?: string | null
          referencia_pago?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liquidaciones_comisiones_comercial_id_fkey"
            columns: ["comercial_id"]
            isOneToOne: false
            referencedRelation: "comerciales_comisionistas"
            referencedColumns: ["id"]
          },
        ]
      }
      maquinaria_medios: {
        Row: {
          activo: boolean | null
          alcance_metros: number | null
          capacidad_kg: number | null
          codigo: string
          coste_dia: number | null
          coste_hora: number | null
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          tipo: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          alcance_metros?: number | null
          capacidad_kg?: number | null
          codigo: string
          coste_dia?: number | null
          coste_hora?: number | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          tipo: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          alcance_metros?: number | null
          capacidad_kg?: number | null
          codigo?: string
          coste_dia?: number | null
          coste_hora?: number | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          tipo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      maquinaria_subcontrata: {
        Row: {
          created_at: string
          estado: string
          fecha_alta: string
          fecha_baja: string | null
          id: string
          matricula: string | null
          nombre: string
          proveedor_id: string
          proyecto_id: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          estado?: string
          fecha_alta?: string
          fecha_baja?: string | null
          id?: string
          matricula?: string | null
          nombre: string
          proveedor_id: string
          proyecto_id?: string | null
          tipo?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          estado?: string
          fecha_alta?: string
          fecha_baja?: string | null
          id?: string
          matricula?: string | null
          nombre?: string
          proveedor_id?: string
          proyecto_id?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "maquinaria_subcontrata_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maquinaria_subcontrata_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      margenes_configuracion: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          margen_maximo: number | null
          margen_minimo: number | null
          margen_objetivo: number | null
          nombre: string
          rango_presupuesto_max: number | null
          rango_presupuesto_min: number | null
          requiere_aprobacion_gerencia: boolean | null
          tipo_proyecto: string[] | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          margen_maximo?: number | null
          margen_minimo?: number | null
          margen_objetivo?: number | null
          nombre: string
          rango_presupuesto_max?: number | null
          rango_presupuesto_min?: number | null
          requiere_aprobacion_gerencia?: boolean | null
          tipo_proyecto?: string[] | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          margen_maximo?: number | null
          margen_minimo?: number | null
          margen_objetivo?: number | null
          nombre?: string
          rango_presupuesto_max?: number | null
          rango_presupuesto_min?: number | null
          requiere_aprobacion_gerencia?: boolean | null
          tipo_proyecto?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      materiales_orden: {
        Row: {
          articulo_id: string
          cantidad_consumida: number
          cantidad_planificada: number
          coste_total: number | null
          coste_unitario: number | null
          created_at: string
          id: string
          notas: string | null
          orden_id: string
          unidad: string
          updated_at: string
        }
        Insert: {
          articulo_id: string
          cantidad_consumida?: number
          cantidad_planificada: number
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string
          id?: string
          notas?: string | null
          orden_id: string
          unidad?: string
          updated_at?: string
        }
        Update: {
          articulo_id?: string
          cantidad_consumida?: number
          cantidad_planificada?: number
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string
          id?: string
          notas?: string | null
          orden_id?: string
          unidad?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "materiales_orden_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      matriz_alcances: {
        Row: {
          activo: boolean
          categoria: string
          codigo: string
          compras_criticas: Json | null
          created_at: string
          descripcion: string | null
          especificaciones: Json | null
          id: string
          impacto_dias_por_100m2: number | null
          impacto_modo: string | null
          impacto_plazo_dias: number | null
          nivel_complejidad: number
          nombre: string
          orden: number
          requiere_ptp: boolean
          riesgos_bloqueo: Json | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          categoria: string
          codigo: string
          compras_criticas?: Json | null
          created_at?: string
          descripcion?: string | null
          especificaciones?: Json | null
          id?: string
          impacto_dias_por_100m2?: number | null
          impacto_modo?: string | null
          impacto_plazo_dias?: number | null
          nivel_complejidad?: number
          nombre: string
          orden?: number
          requiere_ptp?: boolean
          riesgos_bloqueo?: Json | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          categoria?: string
          codigo?: string
          compras_criticas?: Json | null
          created_at?: string
          descripcion?: string | null
          especificaciones?: Json | null
          id?: string
          impacto_dias_por_100m2?: number | null
          impacto_modo?: string | null
          impacto_plazo_dias?: number | null
          nivel_complejidad?: number
          nombre?: string
          orden?: number
          requiere_ptp?: boolean
          riesgos_bloqueo?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      mediciones_subcontrata: {
        Row: {
          cantidad: number
          created_at: string
          fecha: string
          id: string
          observaciones: string | null
          tipo: string
          trabajo_id: string
          validada: boolean | null
          validada_por_id: string | null
        }
        Insert: {
          cantidad: number
          created_at?: string
          fecha?: string
          id?: string
          observaciones?: string | null
          tipo: string
          trabajo_id: string
          validada?: boolean | null
          validada_por_id?: string | null
        }
        Update: {
          cantidad?: number
          created_at?: string
          fecha?: string
          id?: string
          observaciones?: string | null
          tipo?: string
          trabajo_id?: string
          validada?: boolean | null
          validada_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mediciones_subcontrata_trabajo_id_fkey"
            columns: ["trabajo_id"]
            isOneToOne: false
            referencedRelation: "trabajos_subcontrata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mediciones_subcontrata_validada_por_id_fkey"
            columns: ["validada_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      modelos_vivienda: {
        Row: {
          activo: boolean
          altura_entre_plantas_m: number | null
          banos: number
          codigo: string
          created_at: string
          descripcion: string | null
          especificaciones_tecnicas: Json | null
          galeria: Json | null
          habitaciones: number
          habitaciones_maximas: number | null
          habitaciones_minimas: number | null
          id: string
          imagen_principal: string | null
          nombre: string
          notas_estructurales: string | null
          orden: number
          plantas: number
          precio_base: number
          precio_por_m2: number | null
          requiere_escalera_2plantas: boolean | null
          superficie_m2: number
          superficie_maxima_m2: number | null
          superficie_minima_m2: number | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          altura_entre_plantas_m?: number | null
          banos?: number
          codigo: string
          created_at?: string
          descripcion?: string | null
          especificaciones_tecnicas?: Json | null
          galeria?: Json | null
          habitaciones?: number
          habitaciones_maximas?: number | null
          habitaciones_minimas?: number | null
          id?: string
          imagen_principal?: string | null
          nombre: string
          notas_estructurales?: string | null
          orden?: number
          plantas?: number
          precio_base?: number
          precio_por_m2?: number | null
          requiere_escalera_2plantas?: boolean | null
          superficie_m2: number
          superficie_maxima_m2?: number | null
          superficie_minima_m2?: number | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          altura_entre_plantas_m?: number | null
          banos?: number
          codigo?: string
          created_at?: string
          descripcion?: string | null
          especificaciones_tecnicas?: Json | null
          galeria?: Json | null
          habitaciones?: number
          habitaciones_maximas?: number | null
          habitaciones_minimas?: number | null
          id?: string
          imagen_principal?: string | null
          nombre?: string
          notas_estructurales?: string | null
          orden?: number
          plantas?: number
          precio_base?: number
          precio_por_m2?: number | null
          requiere_escalera_2plantas?: boolean | null
          superficie_m2?: number
          superficie_maxima_m2?: number | null
          superficie_minima_m2?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      modulo_descompuestos: {
        Row: {
          articulo_compuesto_id: string | null
          articulo_id: string | null
          cantidad: number
          created_at: string | null
          es_submodulo: boolean | null
          id: string
          modulo_id: string
          notas: string | null
          orden: number | null
          submodulo_id: string | null
        }
        Insert: {
          articulo_compuesto_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          created_at?: string | null
          es_submodulo?: boolean | null
          id?: string
          modulo_id: string
          notas?: string | null
          orden?: number | null
          submodulo_id?: string | null
        }
        Update: {
          articulo_compuesto_id?: string | null
          articulo_id?: string | null
          cantidad?: number
          created_at?: string | null
          es_submodulo?: boolean | null
          id?: string
          modulo_id?: string
          notas?: string | null
          orden?: number | null
          submodulo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modulo_descompuestos_articulo_compuesto_id_fkey"
            columns: ["articulo_compuesto_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos_compuestos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modulo_descompuestos_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modulo_descompuestos_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modulo_descompuestos_modulo_id_fkey"
            columns: ["modulo_id"]
            isOneToOne: false
            referencedRelation: "modulos_predefinidos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modulo_descompuestos_submodulo_id_fkey"
            columns: ["submodulo_id"]
            isOneToOne: false
            referencedRelation: "modulos_predefinidos"
            referencedColumns: ["id"]
          },
        ]
      }
      modulos_predefinidos: {
        Row: {
          activo: boolean | null
          categoria: string | null
          codigo: string
          color_canvas: string | null
          coste_base: number | null
          created_at: string | null
          descripcion: string | null
          dimensiones: Json | null
          icono: string | null
          id: string
          metros_cuadrados: number | null
          nombre: string
          peso_base: number | null
          peso_modulo_terminado: number | null
          plantas: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          categoria?: string | null
          codigo: string
          color_canvas?: string | null
          coste_base?: number | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones?: Json | null
          icono?: string | null
          id?: string
          metros_cuadrados?: number | null
          nombre: string
          peso_base?: number | null
          peso_modulo_terminado?: number | null
          plantas?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          categoria?: string | null
          codigo?: string
          color_canvas?: string | null
          coste_base?: number | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones?: Json | null
          icono?: string | null
          id?: string
          metros_cuadrados?: number | null
          nombre?: string
          peso_base?: number | null
          peso_modulo_terminado?: number | null
          plantas?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      modulos_protegidos: {
        Row: {
          clave_hash: string
          codigo_modulo: string
          created_at: string
          id: string
          is_protected: boolean
          nombre_modulo: string
          updated_at: string
        }
        Insert: {
          clave_hash: string
          codigo_modulo: string
          created_at?: string
          id?: string
          is_protected?: boolean
          nombre_modulo: string
          updated_at?: string
        }
        Update: {
          clave_hash?: string
          codigo_modulo?: string
          created_at?: string
          id?: string
          is_protected?: boolean
          nombre_modulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      necesidades_compra: {
        Row: {
          articulo_id: string | null
          cantidad: number
          cantidad_presupuestada: number | null
          created_at: string
          descripcion: string
          es_compra_critica: boolean | null
          estado: string
          familia: string | null
          fecha_necesidad: string
          fecha_solicitud: string | null
          id: string
          linea_descompuesto_id: string | null
          linea_pedido_id: string | null
          notas: string | null
          pedido_id: string | null
          precio_objetivo: number | null
          precio_presupuestado: number | null
          proveedor_id: string | null
          proyecto_id: string
          total_linea: number | null
          unidad: string
          updated_at: string
        }
        Insert: {
          articulo_id?: string | null
          cantidad: number
          cantidad_presupuestada?: number | null
          created_at?: string
          descripcion: string
          es_compra_critica?: boolean | null
          estado?: string
          familia?: string | null
          fecha_necesidad: string
          fecha_solicitud?: string | null
          id?: string
          linea_descompuesto_id?: string | null
          linea_pedido_id?: string | null
          notas?: string | null
          pedido_id?: string | null
          precio_objetivo?: number | null
          precio_presupuestado?: number | null
          proveedor_id?: string | null
          proyecto_id: string
          total_linea?: number | null
          unidad?: string
          updated_at?: string
        }
        Update: {
          articulo_id?: string | null
          cantidad?: number
          cantidad_presupuestada?: number | null
          created_at?: string
          descripcion?: string
          es_compra_critica?: boolean | null
          estado?: string
          familia?: string | null
          fecha_necesidad?: string
          fecha_solicitud?: string | null
          id?: string
          linea_descompuesto_id?: string | null
          linea_pedido_id?: string | null
          notas?: string | null
          pedido_id?: string | null
          precio_objetivo?: number | null
          precio_presupuestado?: number | null
          proveedor_id?: string | null
          proyecto_id?: string
          total_linea?: number | null
          unidad?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "necesidades_compra_linea_descompuesto_id_fkey"
            columns: ["linea_descompuesto_id"]
            isOneToOne: false
            referencedRelation: "lineas_descompuesto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_compra_linea_pedido_id_fkey"
            columns: ["linea_pedido_id"]
            isOneToOne: false
            referencedRelation: "lineas_pedido"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_compra_pedido_id_fkey"
            columns: ["pedido_id"]
            isOneToOne: false
            referencedRelation: "pedidos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_compra_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_compra_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      necesidades_produccion: {
        Row: {
          cantidad: number
          created_at: string
          descripcion: string
          estado: string
          fecha_necesidad: string
          id: string
          linea_descompuesto_id: string | null
          materiales_listos: boolean | null
          notas: string | null
          orden_produccion_id: string | null
          proyecto_id: string
          ptp_requerido_id: string | null
          ptp_validado: boolean | null
          unidad: string
          updated_at: string
        }
        Insert: {
          cantidad?: number
          created_at?: string
          descripcion: string
          estado?: string
          fecha_necesidad: string
          id?: string
          linea_descompuesto_id?: string | null
          materiales_listos?: boolean | null
          notas?: string | null
          orden_produccion_id?: string | null
          proyecto_id: string
          ptp_requerido_id?: string | null
          ptp_validado?: boolean | null
          unidad?: string
          updated_at?: string
        }
        Update: {
          cantidad?: number
          created_at?: string
          descripcion?: string
          estado?: string
          fecha_necesidad?: string
          id?: string
          linea_descompuesto_id?: string | null
          materiales_listos?: boolean | null
          notas?: string | null
          orden_produccion_id?: string | null
          proyecto_id?: string
          ptp_requerido_id?: string | null
          ptp_validado?: boolean | null
          unidad?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "necesidades_produccion_linea_descompuesto_id_fkey"
            columns: ["linea_descompuesto_id"]
            isOneToOne: false
            referencedRelation: "lineas_descompuesto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_produccion_orden_produccion_id_fkey"
            columns: ["orden_produccion_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_produccion_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "necesidades_produccion_ptp_requerido_id_fkey"
            columns: ["ptp_requerido_id"]
            isOneToOne: false
            referencedRelation: "ptp"
            referencedColumns: ["id"]
          },
        ]
      }
      nomenclatura_cliente: {
        Row: {
          codigo_abante: string
          codigo_cliente: string
          created_at: string | null
          entidad_id: string | null
          id: string
          nombre_abante: string | null
          nombre_cliente: string | null
          proyecto_id: string
          tipo_entidad: string
          updated_at: string | null
        }
        Insert: {
          codigo_abante: string
          codigo_cliente: string
          created_at?: string | null
          entidad_id?: string | null
          id?: string
          nombre_abante?: string | null
          nombre_cliente?: string | null
          proyecto_id: string
          tipo_entidad: string
          updated_at?: string | null
        }
        Update: {
          codigo_abante?: string
          codigo_cliente?: string
          created_at?: string | null
          entidad_id?: string | null
          id?: string
          nombre_abante?: string | null
          nombre_cliente?: string | null
          proyecto_id?: string
          tipo_entidad?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nomenclatura_cliente_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      normativas_urbanisticas: {
        Row: {
          archivo_nombre: string | null
          archivo_path: string | null
          boe_referencia: string | null
          chunks_generados: number | null
          codigo: string
          codigo_postal_patron: string | null
          comunidad_autonoma: string | null
          created_at: string
          descripcion: string | null
          fecha_procesado: string | null
          fecha_publicacion: string | null
          fecha_vigencia: string | null
          id: string
          municipio: string
          nombre_documento: string
          notas: string | null
          parametros_extraidos: Json | null
          procesado: boolean | null
          provincia: string
          subido_por_id: string | null
          tags: string[] | null
          tamano_bytes: number | null
          updated_at: string
          url_oficial: string | null
          usos_permitidos: Json | null
          version: string | null
          vigente: boolean | null
          zonas_definidas: Json | null
        }
        Insert: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          boe_referencia?: string | null
          chunks_generados?: number | null
          codigo: string
          codigo_postal_patron?: string | null
          comunidad_autonoma?: string | null
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          fecha_publicacion?: string | null
          fecha_vigencia?: string | null
          id?: string
          municipio: string
          nombre_documento: string
          notas?: string | null
          parametros_extraidos?: Json | null
          procesado?: boolean | null
          provincia: string
          subido_por_id?: string | null
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          url_oficial?: string | null
          usos_permitidos?: Json | null
          version?: string | null
          vigente?: boolean | null
          zonas_definidas?: Json | null
        }
        Update: {
          archivo_nombre?: string | null
          archivo_path?: string | null
          boe_referencia?: string | null
          chunks_generados?: number | null
          codigo?: string
          codigo_postal_patron?: string | null
          comunidad_autonoma?: string | null
          created_at?: string
          descripcion?: string | null
          fecha_procesado?: string | null
          fecha_publicacion?: string | null
          fecha_vigencia?: string | null
          id?: string
          municipio?: string
          nombre_documento?: string
          notas?: string | null
          parametros_extraidos?: Json | null
          procesado?: boolean | null
          provincia?: string
          subido_por_id?: string | null
          tags?: string[] | null
          tamano_bytes?: number | null
          updated_at?: string
          url_oficial?: string | null
          usos_permitidos?: Json | null
          version?: string | null
          vigente?: boolean | null
          zonas_definidas?: Json | null
        }
        Relationships: []
      }
      notas_proyecto: {
        Row: {
          categoria: string | null
          contenido: string
          created_at: string
          created_by: string | null
          id: string
          orden: number | null
          proyecto_id: string
          titulo: string | null
          updated_at: string
        }
        Insert: {
          categoria?: string | null
          contenido: string
          created_at?: string
          created_by?: string | null
          id?: string
          orden?: number | null
          proyecto_id: string
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          categoria?: string | null
          contenido?: string
          created_at?: string
          created_by?: string | null
          id?: string
          orden?: number | null
          proyecto_id?: string
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "notas_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      notificaciones: {
        Row: {
          created_at: string
          created_by: string | null
          destinatario_rol: string | null
          destinatario_usuario_id: string | null
          entidad_id: string | null
          entidad_tipo: string | null
          fecha_lectura: string | null
          id: string
          leida: boolean
          mensaje: string | null
          proyecto_id: string | null
          tipo: string
          titulo: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          destinatario_rol?: string | null
          destinatario_usuario_id?: string | null
          entidad_id?: string | null
          entidad_tipo?: string | null
          fecha_lectura?: string | null
          id?: string
          leida?: boolean
          mensaje?: string | null
          proyecto_id?: string | null
          tipo?: string
          titulo: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          destinatario_rol?: string | null
          destinatario_usuario_id?: string | null
          entidad_id?: string | null
          entidad_tipo?: string | null
          fecha_lectura?: string | null
          id?: string
          leida?: boolean
          mensaje?: string | null
          proyecto_id?: string | null
          tipo?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "notificaciones_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_compras: {
        Row: {
          cantidad: number | null
          concepto: string
          coste_total: number | null
          created_at: string | null
          fase: string | null
          id: string
          incluye_en_estructura: boolean | null
          iva_pct: number | null
          material_id: string | null
          oferta_id: string
          precio_unitario: number | null
          proveedor_id: string | null
          unidad: string | null
        }
        Insert: {
          cantidad?: number | null
          concepto: string
          coste_total?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          incluye_en_estructura?: boolean | null
          iva_pct?: number | null
          material_id?: string | null
          oferta_id: string
          precio_unitario?: number | null
          proveedor_id?: string | null
          unidad?: string | null
        }
        Update: {
          cantidad?: number | null
          concepto?: string
          coste_total?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          incluye_en_estructura?: boolean | null
          iva_pct?: number | null
          material_id?: string | null
          oferta_id?: string
          precio_unitario?: number | null
          proveedor_id?: string | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "oferta_compras_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "catalogo_materiales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_compras_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_compras_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_dietas_viajes: {
        Row: {
          cantidad: number | null
          catalogo_id: string | null
          concepto: string
          coste_total: number | null
          coste_unitario: number | null
          created_at: string | null
          fase: string | null
          id: string
          oferta_id: string
          personas: number | null
        }
        Insert: {
          cantidad?: number | null
          catalogo_id?: string | null
          concepto: string
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          oferta_id: string
          personas?: number | null
        }
        Update: {
          cantidad?: number | null
          catalogo_id?: string | null
          concepto?: string
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          oferta_id?: string
          personas?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "oferta_dietas_viajes_catalogo_id_fkey"
            columns: ["catalogo_id"]
            isOneToOne: false
            referencedRelation: "catalogo_costes_viaje"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_dietas_viajes_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_estructura_seleccionada: {
        Row: {
          created_at: string | null
          estructura_proveedor_id: string | null
          id: string
          observaciones: string | null
          oferta_id: string
          precio_aplicado: number | null
        }
        Insert: {
          created_at?: string | null
          estructura_proveedor_id?: string | null
          id?: string
          observaciones?: string | null
          oferta_id: string
          precio_aplicado?: number | null
        }
        Update: {
          created_at?: string | null
          estructura_proveedor_id?: string | null
          id?: string
          observaciones?: string | null
          oferta_id?: string
          precio_aplicado?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "oferta_estructura_seleccionada_estructura_proveedor_id_fkey"
            columns: ["estructura_proveedor_id"]
            isOneToOne: false
            referencedRelation: "ofertas_estructura_proveedor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_estructura_seleccionada_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_fases: {
        Row: {
          created_at: string
          id: string
          nombre: string
          notas: string | null
          oferta_id: string
          orden: number
          semanas_previstas: number
        }
        Insert: {
          created_at?: string
          id?: string
          nombre: string
          notas?: string | null
          oferta_id: string
          orden?: number
          semanas_previstas?: number
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string
          notas?: string | null
          oferta_id?: string
          orden?: number
          semanas_previstas?: number
        }
        Relationships: [
          {
            foreignKeyName: "oferta_fases_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_logistica: {
        Row: {
          cantidad: number | null
          catalogo_id: string | null
          concepto: string
          coste_total: number | null
          coste_unitario: number | null
          created_at: string | null
          id: string
          observaciones: string | null
          oferta_id: string
        }
        Insert: {
          cantidad?: number | null
          catalogo_id?: string | null
          concepto: string
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          observaciones?: string | null
          oferta_id: string
        }
        Update: {
          cantidad?: number | null
          catalogo_id?: string | null
          concepto?: string
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          id?: string
          observaciones?: string | null
          oferta_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "oferta_logistica_catalogo_id_fkey"
            columns: ["catalogo_id"]
            isOneToOne: false
            referencedRelation: "catalogo_costes_logistica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_logistica_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_maquinaria: {
        Row: {
          cantidad: number | null
          coste_total: number | null
          coste_unitario: number | null
          created_at: string | null
          fase: string | null
          id: string
          maquinaria_id: string | null
          nombre: string
          oferta_id: string
          semanas: number | null
        }
        Insert: {
          cantidad?: number | null
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          maquinaria_id?: string | null
          nombre: string
          oferta_id: string
          semanas?: number | null
        }
        Update: {
          cantidad?: number | null
          coste_total?: number | null
          coste_unitario?: number | null
          created_at?: string | null
          fase?: string | null
          id?: string
          maquinaria_id?: string | null
          nombre?: string
          oferta_id?: string
          semanas?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "oferta_maquinaria_maquinaria_id_fkey"
            columns: ["maquinaria_id"]
            isOneToOne: false
            referencedRelation: "catalogo_maquinaria_auxiliar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_maquinaria_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      oferta_personal: {
        Row: {
          cantidad_personas: number | null
          categoria_mano_obra_id: string | null
          categoria_nombre: string
          coste_hora: number | null
          coste_hora_extra: number | null
          coste_total: number | null
          created_at: string | null
          dias_semana: number | null
          fase: string | null
          horas_extra_semana: number | null
          horas_semana: number | null
          horas_totales: number | null
          id: string
          oferta_id: string
          semanas: number | null
        }
        Insert: {
          cantidad_personas?: number | null
          categoria_mano_obra_id?: string | null
          categoria_nombre: string
          coste_hora?: number | null
          coste_hora_extra?: number | null
          coste_total?: number | null
          created_at?: string | null
          dias_semana?: number | null
          fase?: string | null
          horas_extra_semana?: number | null
          horas_semana?: number | null
          horas_totales?: number | null
          id?: string
          oferta_id: string
          semanas?: number | null
        }
        Update: {
          cantidad_personas?: number | null
          categoria_mano_obra_id?: string | null
          categoria_nombre?: string
          coste_hora?: number | null
          coste_hora_extra?: number | null
          coste_total?: number | null
          created_at?: string | null
          dias_semana?: number | null
          fase?: string | null
          horas_extra_semana?: number | null
          horas_semana?: number | null
          horas_totales?: number | null
          id?: string
          oferta_id?: string
          semanas?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "oferta_personal_categoria_mano_obra_id_fkey"
            columns: ["categoria_mano_obra_id"]
            isOneToOne: false
            referencedRelation: "categorias_mano_obra"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oferta_personal_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas: {
        Row: {
          aceptada: boolean | null
          codigo: string
          contenido: Json | null
          contenido_detalle: Json | null
          creado_por_id: string | null
          created_at: string
          descuento_porcentaje: number | null
          estado: string
          fecha_aceptacion: string | null
          fecha_oferta: string
          fecha_validez: string | null
          historial_cambios: Json | null
          id: string
          importe_final: number
          importe_total: number
          notas: string | null
          proyecto_id: string | null
          updated_at: string
          version: number
        }
        Insert: {
          aceptada?: boolean | null
          codigo: string
          contenido?: Json | null
          contenido_detalle?: Json | null
          creado_por_id?: string | null
          created_at?: string
          descuento_porcentaje?: number | null
          estado?: string
          fecha_aceptacion?: string | null
          fecha_oferta?: string
          fecha_validez?: string | null
          historial_cambios?: Json | null
          id?: string
          importe_final?: number
          importe_total?: number
          notas?: string | null
          proyecto_id?: string | null
          updated_at?: string
          version?: number
        }
        Update: {
          aceptada?: boolean | null
          codigo?: string
          contenido?: Json | null
          contenido_detalle?: Json | null
          creado_por_id?: string | null
          created_at?: string
          descuento_porcentaje?: number | null
          estado?: string
          fecha_aceptacion?: string | null
          fecha_oferta?: string
          fecha_validez?: string | null
          historial_cambios?: Json | null
          id?: string
          importe_final?: number
          importe_total?: number
          notas?: string | null
          proyecto_id?: string | null
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_creado_por_id_fkey"
            columns: ["creado_por_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas_abante: {
        Row: {
          alcances_seleccionados: Json | null
          cliente_id: string | null
          codigo: string
          comercial_id: string | null
          competidor_ganador: string | null
          condiciones: string | null
          created_at: string
          descompuesto: Json | null
          descripcion: string | null
          descuento_porcentaje: number | null
          es_version_actual: boolean
          estado: Database["public"]["Enums"]["estado_oferta_abante"]
          fecha_emision: string | null
          fecha_respuesta: string | null
          fecha_solicitud: string | null
          fecha_validez: string | null
          id: string
          importe_total: number | null
          margen_objetivo: number | null
          motivo_perdida: string | null
          nombre: string
          notas_internas: string | null
          presupuesto_base: number | null
          proyecto_id: string | null
          updated_at: string
          version: number
          version_anterior_id: string | null
        }
        Insert: {
          alcances_seleccionados?: Json | null
          cliente_id?: string | null
          codigo: string
          comercial_id?: string | null
          competidor_ganador?: string | null
          condiciones?: string | null
          created_at?: string
          descompuesto?: Json | null
          descripcion?: string | null
          descuento_porcentaje?: number | null
          es_version_actual?: boolean
          estado?: Database["public"]["Enums"]["estado_oferta_abante"]
          fecha_emision?: string | null
          fecha_respuesta?: string | null
          fecha_solicitud?: string | null
          fecha_validez?: string | null
          id?: string
          importe_total?: number | null
          margen_objetivo?: number | null
          motivo_perdida?: string | null
          nombre: string
          notas_internas?: string | null
          presupuesto_base?: number | null
          proyecto_id?: string | null
          updated_at?: string
          version?: number
          version_anterior_id?: string | null
        }
        Update: {
          alcances_seleccionados?: Json | null
          cliente_id?: string | null
          codigo?: string
          comercial_id?: string | null
          competidor_ganador?: string | null
          condiciones?: string | null
          created_at?: string
          descompuesto?: Json | null
          descripcion?: string | null
          descuento_porcentaje?: number | null
          es_version_actual?: boolean
          estado?: Database["public"]["Enums"]["estado_oferta_abante"]
          fecha_emision?: string | null
          fecha_respuesta?: string | null
          fecha_solicitud?: string | null
          fecha_validez?: string | null
          id?: string
          importe_total?: number | null
          margen_objetivo?: number | null
          motivo_perdida?: string | null
          nombre?: string
          notas_internas?: string | null
          presupuesto_base?: number | null
          proyecto_id?: string | null
          updated_at?: string
          version?: number
          version_anterior_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_abante_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_abante_comercial_id_fkey"
            columns: ["comercial_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_abante_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_abante_version_anterior_id_fkey"
            columns: ["version_anterior_id"]
            isOneToOne: false
            referencedRelation: "ofertas_abante"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas_comerciales: {
        Row: {
          beneficio_estimado: number | null
          bloqueada: boolean | null
          complejidad: string | null
          condiciones_pago: string | null
          coste_alojamiento_dia: number | null
          coste_contingencia: number | null
          coste_dieta_completa: number | null
          coste_indirecto: number | null
          coste_media_dieta: number | null
          coste_riesgo: number | null
          coste_total_configurador: number | null
          created_at: string
          descripcion: string | null
          descuento_global_pct: number | null
          dificultad_montaje: string | null
          distancia_obra_km: number | null
          documento_pdf_id: string | null
          estado: string
          exento_iva: boolean
          fecha_aceptacion: string | null
          fecha_creacion: string
          fecha_envio: string | null
          fecha_generacion_pdf: string | null
          fecha_validez: string | null
          forma_pago: string | null
          id: string
          margen_aplicado: number | null
          margen_objetivo_pct: number | null
          notas: string | null
          numero_oferta: string
          observaciones_pedido: string | null
          pais_destino: string | null
          plazo_entrega_semanas: number | null
          plazo_semanas: number | null
          precio_final_pedido: number | null
          precio_oferta_cliente: number | null
          precio_venta_configurador: number | null
          proyecto_id: string
          subtotal_directo: number | null
          superficie_m2: number | null
          tipo_dieta: string | null
          tipo_obra: string | null
          titulo: string | null
          total_comisiones: number | null
          total_gastos: number | null
          total_mano_obra: number | null
          total_materiales: number | null
          total_oferta: number | null
          total_proveedores: number | null
          ubicacion: string | null
          updated_at: string
          validacion_financiera: boolean | null
          validacion_tecnica: boolean | null
          version: number
          version_padre_id: string | null
        }
        Insert: {
          beneficio_estimado?: number | null
          bloqueada?: boolean | null
          complejidad?: string | null
          condiciones_pago?: string | null
          coste_alojamiento_dia?: number | null
          coste_contingencia?: number | null
          coste_dieta_completa?: number | null
          coste_indirecto?: number | null
          coste_media_dieta?: number | null
          coste_riesgo?: number | null
          coste_total_configurador?: number | null
          created_at?: string
          descripcion?: string | null
          descuento_global_pct?: number | null
          dificultad_montaje?: string | null
          distancia_obra_km?: number | null
          documento_pdf_id?: string | null
          estado?: string
          exento_iva?: boolean
          fecha_aceptacion?: string | null
          fecha_creacion?: string
          fecha_envio?: string | null
          fecha_generacion_pdf?: string | null
          fecha_validez?: string | null
          forma_pago?: string | null
          id?: string
          margen_aplicado?: number | null
          margen_objetivo_pct?: number | null
          notas?: string | null
          numero_oferta: string
          observaciones_pedido?: string | null
          pais_destino?: string | null
          plazo_entrega_semanas?: number | null
          plazo_semanas?: number | null
          precio_final_pedido?: number | null
          precio_oferta_cliente?: number | null
          precio_venta_configurador?: number | null
          proyecto_id: string
          subtotal_directo?: number | null
          superficie_m2?: number | null
          tipo_dieta?: string | null
          tipo_obra?: string | null
          titulo?: string | null
          total_comisiones?: number | null
          total_gastos?: number | null
          total_mano_obra?: number | null
          total_materiales?: number | null
          total_oferta?: number | null
          total_proveedores?: number | null
          ubicacion?: string | null
          updated_at?: string
          validacion_financiera?: boolean | null
          validacion_tecnica?: boolean | null
          version?: number
          version_padre_id?: string | null
        }
        Update: {
          beneficio_estimado?: number | null
          bloqueada?: boolean | null
          complejidad?: string | null
          condiciones_pago?: string | null
          coste_alojamiento_dia?: number | null
          coste_contingencia?: number | null
          coste_dieta_completa?: number | null
          coste_indirecto?: number | null
          coste_media_dieta?: number | null
          coste_riesgo?: number | null
          coste_total_configurador?: number | null
          created_at?: string
          descripcion?: string | null
          descuento_global_pct?: number | null
          dificultad_montaje?: string | null
          distancia_obra_km?: number | null
          documento_pdf_id?: string | null
          estado?: string
          exento_iva?: boolean
          fecha_aceptacion?: string | null
          fecha_creacion?: string
          fecha_envio?: string | null
          fecha_generacion_pdf?: string | null
          fecha_validez?: string | null
          forma_pago?: string | null
          id?: string
          margen_aplicado?: number | null
          margen_objetivo_pct?: number | null
          notas?: string | null
          numero_oferta?: string
          observaciones_pedido?: string | null
          pais_destino?: string | null
          plazo_entrega_semanas?: number | null
          plazo_semanas?: number | null
          precio_final_pedido?: number | null
          precio_oferta_cliente?: number | null
          precio_venta_configurador?: number | null
          proyecto_id?: string
          subtotal_directo?: number | null
          superficie_m2?: number | null
          tipo_dieta?: string | null
          tipo_obra?: string | null
          titulo?: string | null
          total_comisiones?: number | null
          total_gastos?: number | null
          total_mano_obra?: number | null
          total_materiales?: number | null
          total_oferta?: number | null
          total_proveedores?: number | null
          ubicacion?: string | null
          updated_at?: string
          validacion_financiera?: boolean | null
          validacion_tecnica?: boolean | null
          version?: number
          version_padre_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_comerciales_documento_pdf_id_fkey"
            columns: ["documento_pdf_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_comerciales_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_comerciales_version_padre_id_fkey"
            columns: ["version_padre_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas_estructura_proveedor: {
        Row: {
          activo: boolean | null
          condiciones_texto: string | null
          created_at: string | null
          descripcion: string | null
          documento_pdf_path: string | null
          id: string
          incluye_aduanas: boolean | null
          incluye_descarga: boolean | null
          incluye_montaje: boolean | null
          incluye_transporte: boolean | null
          incoterm: string | null
          moneda: string | null
          nombre_oferta: string
          observaciones: string | null
          plazo_entrega_dias: number | null
          precio_base: number | null
          proveedor_id: string | null
          updated_at: string | null
          validez_oferta_fecha: string | null
        }
        Insert: {
          activo?: boolean | null
          condiciones_texto?: string | null
          created_at?: string | null
          descripcion?: string | null
          documento_pdf_path?: string | null
          id?: string
          incluye_aduanas?: boolean | null
          incluye_descarga?: boolean | null
          incluye_montaje?: boolean | null
          incluye_transporte?: boolean | null
          incoterm?: string | null
          moneda?: string | null
          nombre_oferta: string
          observaciones?: string | null
          plazo_entrega_dias?: number | null
          precio_base?: number | null
          proveedor_id?: string | null
          updated_at?: string | null
          validez_oferta_fecha?: string | null
        }
        Update: {
          activo?: boolean | null
          condiciones_texto?: string | null
          created_at?: string | null
          descripcion?: string | null
          documento_pdf_path?: string | null
          id?: string
          incluye_aduanas?: boolean | null
          incluye_descarga?: boolean | null
          incluye_montaje?: boolean | null
          incluye_transporte?: boolean | null
          incoterm?: string | null
          moneda?: string | null
          nombre_oferta?: string
          observaciones?: string | null
          plazo_entrega_dias?: number | null
          precio_base?: number | null
          proveedor_id?: string | null
          updated_at?: string | null
          validez_oferta_fecha?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_estructura_proveedor_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas_proveedor_proyecto: {
        Row: {
          adjudicado: boolean | null
          created_at: string
          documento_nombre: string | null
          documento_url: string | null
          fecha_oferta: string | null
          id: string
          importe_total: number | null
          notas: string | null
          proveedor_id: string | null
          proveedor_nombre: string | null
          proyecto_id: string
          referencia_oferta: string | null
          updated_at: string
          validez_dias: number | null
        }
        Insert: {
          adjudicado?: boolean | null
          created_at?: string
          documento_nombre?: string | null
          documento_url?: string | null
          fecha_oferta?: string | null
          id?: string
          importe_total?: number | null
          notas?: string | null
          proveedor_id?: string | null
          proveedor_nombre?: string | null
          proyecto_id: string
          referencia_oferta?: string | null
          updated_at?: string
          validez_dias?: number | null
        }
        Update: {
          adjudicado?: boolean | null
          created_at?: string
          documento_nombre?: string | null
          documento_url?: string | null
          fecha_oferta?: string | null
          id?: string
          importe_total?: number | null
          notas?: string | null
          proveedor_id?: string | null
          proveedor_nombre?: string | null
          proyecto_id?: string
          referencia_oferta?: string | null
          updated_at?: string
          validez_dias?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_proveedor_proyecto_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_proveedor_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      ofertas_proveedores_proyecto: {
        Row: {
          adjudicado: boolean | null
          created_at: string | null
          descripcion: string | null
          fecha_oferta: string | null
          id: string
          importe: number
          notas: string | null
          partida: string
          proveedor_id: string | null
          proveedor_nombre: string | null
          proyecto_estructura_id: string
          updated_at: string | null
          validez_dias: number | null
        }
        Insert: {
          adjudicado?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          fecha_oferta?: string | null
          id?: string
          importe?: number
          notas?: string | null
          partida: string
          proveedor_id?: string | null
          proveedor_nombre?: string | null
          proyecto_estructura_id: string
          updated_at?: string | null
          validez_dias?: number | null
        }
        Update: {
          adjudicado?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          fecha_oferta?: string | null
          id?: string
          importe?: number
          notas?: string | null
          partida?: string
          proveedor_id?: string | null
          proveedor_nombre?: string | null
          proyecto_estructura_id?: string
          updated_at?: string | null
          validez_dias?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ofertas_proveedores_proyecto_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ofertas_proveedores_proyecto_proyecto_estructura_id_fkey"
            columns: ["proyecto_estructura_id"]
            isOneToOne: false
            referencedRelation: "proyectos_estructura_espacial"
            referencedColumns: ["id"]
          },
        ]
      }
      opciones_configurador: {
        Row: {
          activo: boolean
          categoria_id: string | null
          codigo: string
          compatible_con: Json | null
          created_at: string
          descripcion: string | null
          descripcion_larga: string | null
          disponible_zonas: Json | null
          es_opcion_base: boolean
          ficha_tecnica: Json | null
          galeria: Json | null
          id: string
          imagen: string | null
          incompatible_con: Json | null
          marca: string | null
          nombre: string
          orden: number
          precio_adicional: number
          proveedor_id: string | null
          recomendado_zonas: Json | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          categoria_id?: string | null
          codigo: string
          compatible_con?: Json | null
          created_at?: string
          descripcion?: string | null
          descripcion_larga?: string | null
          disponible_zonas?: Json | null
          es_opcion_base?: boolean
          ficha_tecnica?: Json | null
          galeria?: Json | null
          id?: string
          imagen?: string | null
          incompatible_con?: Json | null
          marca?: string | null
          nombre: string
          orden?: number
          precio_adicional?: number
          proveedor_id?: string | null
          recomendado_zonas?: Json | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          categoria_id?: string | null
          codigo?: string
          compatible_con?: Json | null
          created_at?: string
          descripcion?: string | null
          descripcion_larga?: string | null
          disponible_zonas?: Json | null
          es_opcion_base?: boolean
          ficha_tecnica?: Json | null
          galeria?: Json | null
          id?: string
          imagen?: string | null
          incompatible_con?: Json | null
          marca?: string | null
          nombre?: string
          orden?: number
          precio_adicional?: number
          proveedor_id?: string | null
          recomendado_zonas?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "opciones_configurador_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_configurador"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opciones_configurador_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      orden_produccion_maestro: {
        Row: {
          cantidad: number
          codigo_op: string
          coste_previsto: number | null
          created_at: string | null
          created_by: string | null
          desviacion_horas: number | null
          estado:
            | Database["public"]["Enums"]["estado_orden_prod_maestro"]
            | null
          estructura_id: string
          fecha_creacion: string | null
          horas_previstas: number | null
          horas_reales: number | null
          id: string
          observaciones: string | null
          partida_id: string | null
          proyecto_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          cantidad: number
          codigo_op: string
          coste_previsto?: number | null
          created_at?: string | null
          created_by?: string | null
          desviacion_horas?: number | null
          estado?:
            | Database["public"]["Enums"]["estado_orden_prod_maestro"]
            | null
          estructura_id: string
          fecha_creacion?: string | null
          horas_previstas?: number | null
          horas_reales?: number | null
          id?: string
          observaciones?: string | null
          partida_id?: string | null
          proyecto_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          cantidad?: number
          codigo_op?: string
          coste_previsto?: number | null
          created_at?: string | null
          created_by?: string | null
          desviacion_horas?: number | null
          estado?:
            | Database["public"]["Enums"]["estado_orden_prod_maestro"]
            | null
          estructura_id?: string
          fecha_creacion?: string | null
          horas_previstas?: number | null
          horas_reales?: number | null
          id?: string
          observaciones?: string | null
          partida_id?: string | null
          proyecto_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orden_produccion_maestro_estructura_id_fkey"
            columns: ["estructura_id"]
            isOneToOne: false
            referencedRelation: "estructura_coste"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orden_produccion_maestro_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_base"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orden_produccion_maestro_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      ordenes_produccion: {
        Row: {
          codigo: string
          created_at: string
          descripcion: string | null
          edificio_id: string | null
          estado: Database["public"]["Enums"]["estado_orden_produccion"]
          fecha_fin_planificada: string | null
          fecha_fin_real: string | null
          fecha_inicio_planificada: string | null
          fecha_inicio_real: string | null
          horas_estimadas: number | null
          horas_reales: number | null
          id: string
          nombre: string
          observaciones: string | null
          prioridad: Database["public"]["Enums"]["prioridad_orden"]
          progreso: number
          proyecto_id: string | null
          responsable_id: string | null
          ubicacion: string | null
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          estado?: Database["public"]["Enums"]["estado_orden_produccion"]
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          nombre: string
          observaciones?: string | null
          prioridad?: Database["public"]["Enums"]["prioridad_orden"]
          progreso?: number
          proyecto_id?: string | null
          responsable_id?: string | null
          ubicacion?: string | null
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          estado?: Database["public"]["Enums"]["estado_orden_produccion"]
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          nombre?: string
          observaciones?: string | null
          prioridad?: Database["public"]["Enums"]["prioridad_orden"]
          progreso?: number
          proyecto_id?: string | null
          responsable_id?: string | null
          ubicacion?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ordenes_produccion_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordenes_produccion_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordenes_produccion_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      parametros_financieros: {
        Row: {
          contingency_pct: number | null
          id: string
          iva_default_pct: number | null
          margen_minimo_pct: number | null
          moneda_base: string | null
          overhead_pct: number | null
          risk_pct: number | null
          updated_at: string | null
        }
        Insert: {
          contingency_pct?: number | null
          id?: string
          iva_default_pct?: number | null
          margen_minimo_pct?: number | null
          moneda_base?: string | null
          overhead_pct?: number | null
          risk_pct?: number | null
          updated_at?: string | null
        }
        Update: {
          contingency_pct?: number | null
          id?: string
          iva_default_pct?: number | null
          margen_minimo_pct?: number | null
          moneda_base?: string | null
          overhead_pct?: number | null
          risk_pct?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      partes_instalacion: {
        Row: {
          created_at: string
          descripcion_trabajo: string
          fecha: string
          firmado_cliente: boolean | null
          hora_fin: string | null
          hora_inicio: string | null
          horas_trabajadas: number | null
          id: string
          incidencias: string | null
          instalacion_id: string
          materiales_utilizados: string | null
          nombre_firma: string | null
          trabajador_id: string | null
        }
        Insert: {
          created_at?: string
          descripcion_trabajo: string
          fecha?: string
          firmado_cliente?: boolean | null
          hora_fin?: string | null
          hora_inicio?: string | null
          horas_trabajadas?: number | null
          id?: string
          incidencias?: string | null
          instalacion_id: string
          materiales_utilizados?: string | null
          nombre_firma?: string | null
          trabajador_id?: string | null
        }
        Update: {
          created_at?: string
          descripcion_trabajo?: string
          fecha?: string
          firmado_cliente?: boolean | null
          hora_fin?: string | null
          hora_inicio?: string | null
          horas_trabajadas?: number | null
          id?: string
          incidencias?: string | null
          instalacion_id?: string
          materiales_utilizados?: string | null
          nombre_firma?: string | null
          trabajador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partes_instalacion_instalacion_id_fkey"
            columns: ["instalacion_id"]
            isOneToOne: false
            referencedRelation: "instalaciones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partes_instalacion_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      partidas_alcances: {
        Row: {
          alcance_id: string
          created_at: string
          id: string
          notas: string | null
          orden: number
          partida_id: string
          updated_at: string
        }
        Insert: {
          alcance_id: string
          created_at?: string
          id?: string
          notas?: string | null
          orden?: number
          partida_id: string
          updated_at?: string
        }
        Update: {
          alcance_id?: string
          created_at?: string
          id?: string
          notas?: string | null
          orden?: number
          partida_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partidas_alcances_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partidas_alcances_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: true
            referencedRelation: "compras_partidas_base"
            referencedColumns: ["id"]
          },
        ]
      }
      partidas_capitulo: {
        Row: {
          capitulo_id: string
          created_at: string
          es_obligatorio: boolean | null
          id: string
          notas: string | null
          orden: number | null
          partida_id: string
          subcapitulo_maestro_id: string | null
          updated_at: string
        }
        Insert: {
          capitulo_id: string
          created_at?: string
          es_obligatorio?: boolean | null
          id?: string
          notas?: string | null
          orden?: number | null
          partida_id: string
          subcapitulo_maestro_id?: string | null
          updated_at?: string
        }
        Update: {
          capitulo_id?: string
          created_at?: string
          es_obligatorio?: boolean | null
          id?: string
          notas?: string | null
          orden?: number | null
          partida_id?: string
          subcapitulo_maestro_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partidas_capitulo_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_fase"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partidas_capitulo_partida_id_fkey"
            columns: ["partida_id"]
            isOneToOne: true
            referencedRelation: "partidas_plan_compras"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partidas_capitulo_subcapitulo_maestro_id_fkey"
            columns: ["subcapitulo_maestro_id"]
            isOneToOne: false
            referencedRelation: "subcapitulos_maestro"
            referencedColumns: ["id"]
          },
        ]
      }
      partidas_plan_compras: {
        Row: {
          activo: boolean | null
          cantidad: number | null
          capitulo_id: string | null
          categoria: string | null
          clasificacion: string | null
          codigo: string
          compras_criticas: Json | null
          coste_total_calculado: number | null
          created_at: string
          descripcion: string | null
          es_mano_obra: boolean | null
          es_material: boolean | null
          es_obligatoria: boolean | null
          especificaciones: Json | null
          id: string
          impacto_dias_por_100m2: number | null
          impacto_modo: string | null
          impacto_plazo_dias: number | null
          margen_pct: number | null
          nivel_complejidad: number | null
          nombre: string
          orden: number | null
          precio_venta_calculado: number | null
          requiere_ptp: boolean | null
          riesgos_bloqueo: Json | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          cantidad?: number | null
          capitulo_id?: string | null
          categoria?: string | null
          clasificacion?: string | null
          codigo: string
          compras_criticas?: Json | null
          coste_total_calculado?: number | null
          created_at?: string
          descripcion?: string | null
          es_mano_obra?: boolean | null
          es_material?: boolean | null
          es_obligatoria?: boolean | null
          especificaciones?: Json | null
          id?: string
          impacto_dias_por_100m2?: number | null
          impacto_modo?: string | null
          impacto_plazo_dias?: number | null
          margen_pct?: number | null
          nivel_complejidad?: number | null
          nombre: string
          orden?: number | null
          precio_venta_calculado?: number | null
          requiere_ptp?: boolean | null
          riesgos_bloqueo?: Json | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          cantidad?: number | null
          capitulo_id?: string | null
          categoria?: string | null
          clasificacion?: string | null
          codigo?: string
          compras_criticas?: Json | null
          coste_total_calculado?: number | null
          created_at?: string
          descripcion?: string | null
          es_mano_obra?: boolean | null
          es_material?: boolean | null
          es_obligatoria?: boolean | null
          especificaciones?: Json | null
          id?: string
          impacto_dias_por_100m2?: number | null
          impacto_modo?: string | null
          impacto_plazo_dias?: number | null
          margen_pct?: number | null
          nivel_complejidad?: number | null
          nombre?: string
          orden?: number | null
          precio_venta_calculado?: number | null
          requiere_ptp?: boolean | null
          riesgos_bloqueo?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partidas_plan_compras_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      partidas_presto: {
        Row: {
          capitulo_id: string
          codigo: string
          created_at: string | null
          descripcion: string
          id: string
          importe: number | null
          medicion: number | null
          notas: string | null
          orden: number | null
          precio_unitario: number | null
          unidad: string | null
        }
        Insert: {
          capitulo_id: string
          codigo: string
          created_at?: string | null
          descripcion: string
          id?: string
          importe?: number | null
          medicion?: number | null
          notas?: string | null
          orden?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Update: {
          capitulo_id?: string
          codigo?: string
          created_at?: string | null
          descripcion?: string
          id?: string
          importe?: number | null
          medicion?: number | null
          notas?: string | null
          orden?: number | null
          precio_unitario?: number | null
          unidad?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partidas_presto_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_presto"
            referencedColumns: ["id"]
          },
        ]
      }
      patrones_mapeo_presto: {
        Row: {
          created_at: string
          id: string
          mapeos: Json
          nombre_patron: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          mapeos?: Json
          nombre_patron: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          mapeos?: Json
          nombre_patron?: string
          updated_at?: string
        }
        Relationships: []
      }
      pedidos: {
        Row: {
          aprobado_en: string | null
          aprobador_id: string | null
          codigo: string
          created_at: string
          criterio_reparto: string | null
          descuento_porcentaje: number | null
          direccion_entrega: string | null
          distribucion_edificios: Json | null
          edificio_id: string | null
          edificios_ids: string[] | null
          entregas_programadas: Json | null
          enviado_en: string | null
          es_compra_global: boolean | null
          es_subcontrata: boolean
          estado: Database["public"]["Enums"]["estado_pedido"]
          fecha_entrega_prevista: string | null
          fecha_entrega_real: string | null
          fecha_pedido: string
          forma_pago: string | null
          id: string
          iva_porcentaje: number
          localidad_entrega: string | null
          num_entregas: number | null
          observaciones: string | null
          partida_proyecto_id: string | null
          proveedor_id: string | null
          proyecto_id: string | null
          solicitante_id: string | null
          subcontrata_id: string | null
          subtotal: number
          total: number
          updated_at: string
          vencimientos: Json | null
        }
        Insert: {
          aprobado_en?: string | null
          aprobador_id?: string | null
          codigo: string
          created_at?: string
          criterio_reparto?: string | null
          descuento_porcentaje?: number | null
          direccion_entrega?: string | null
          distribucion_edificios?: Json | null
          edificio_id?: string | null
          edificios_ids?: string[] | null
          entregas_programadas?: Json | null
          enviado_en?: string | null
          es_compra_global?: boolean | null
          es_subcontrata?: boolean
          estado?: Database["public"]["Enums"]["estado_pedido"]
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          fecha_pedido?: string
          forma_pago?: string | null
          id?: string
          iva_porcentaje?: number
          localidad_entrega?: string | null
          num_entregas?: number | null
          observaciones?: string | null
          partida_proyecto_id?: string | null
          proveedor_id?: string | null
          proyecto_id?: string | null
          solicitante_id?: string | null
          subcontrata_id?: string | null
          subtotal?: number
          total?: number
          updated_at?: string
          vencimientos?: Json | null
        }
        Update: {
          aprobado_en?: string | null
          aprobador_id?: string | null
          codigo?: string
          created_at?: string
          criterio_reparto?: string | null
          descuento_porcentaje?: number | null
          direccion_entrega?: string | null
          distribucion_edificios?: Json | null
          edificio_id?: string | null
          edificios_ids?: string[] | null
          entregas_programadas?: Json | null
          enviado_en?: string | null
          es_compra_global?: boolean | null
          es_subcontrata?: boolean
          estado?: Database["public"]["Enums"]["estado_pedido"]
          fecha_entrega_prevista?: string | null
          fecha_entrega_real?: string | null
          fecha_pedido?: string
          forma_pago?: string | null
          id?: string
          iva_porcentaje?: number
          localidad_entrega?: string | null
          num_entregas?: number | null
          observaciones?: string | null
          partida_proyecto_id?: string | null
          proveedor_id?: string | null
          proyecto_id?: string | null
          solicitante_id?: string | null
          subcontrata_id?: string | null
          subtotal?: number
          total?: number
          updated_at?: string
          vencimientos?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "pedidos_aprobador_id_fkey"
            columns: ["aprobador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_partida_proyecto_id_fkey"
            columns: ["partida_proyecto_id"]
            isOneToOne: false
            referencedRelation: "compras_partidas_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_solicitante_id_fkey"
            columns: ["solicitante_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pedidos_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      permisos_departamento: {
        Row: {
          created_at: string
          departamento_id: string
          id: string
          puede_editar: boolean
          puede_gestionar: boolean
          puede_ver: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          departamento_id: string
          id?: string
          puede_editar?: boolean
          puede_gestionar?: boolean
          puede_ver?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          departamento_id?: string
          id?: string
          puede_editar?: boolean
          puede_gestionar?: boolean
          puede_ver?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "permisos_departamento_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
        ]
      }
      personal_subcontrata: {
        Row: {
          activo: boolean | null
          apellidos: string | null
          created_at: string
          dni: string | null
          email: string | null
          fecha_alta: string | null
          fecha_baja: string | null
          id: string
          nombre: string
          notas: string | null
          puesto: string | null
          subcontrata_id: string
          telefono: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          apellidos?: string | null
          created_at?: string
          dni?: string | null
          email?: string | null
          fecha_alta?: string | null
          fecha_baja?: string | null
          id?: string
          nombre: string
          notas?: string | null
          puesto?: string | null
          subcontrata_id: string
          telefono?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          apellidos?: string | null
          created_at?: string
          dni?: string | null
          email?: string | null
          fecha_alta?: string | null
          fecha_baja?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          puesto?: string | null
          subcontrata_id?: string
          telefono?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "personal_subcontrata_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_compras_alcance: {
        Row: {
          alcance_id: string
          articulo_id: string
          cantidad_estimada: number | null
          created_at: string
          id: string
          notas: string | null
          orden: number
          unidad: string | null
          updated_at: string
        }
        Insert: {
          alcance_id: string
          articulo_id: string
          cantidad_estimada?: number | null
          created_at?: string
          id?: string
          notas?: string | null
          orden?: number
          unidad?: string | null
          updated_at?: string
        }
        Update: {
          alcance_id?: string
          articulo_id?: string
          cantidad_estimada?: number | null
          created_at?: string
          id?: string
          notas?: string | null
          orden?: number
          unidad?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_compras_alcance_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_compras_alcance_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_compras_alcance_articulo_id_fkey"
            columns: ["articulo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
        ]
      }
      plantilla_checklist_prl: {
        Row: {
          activo: boolean
          categoria: string
          codigo: string
          created_at: string
          descripcion: string | null
          es_obligatorio: boolean
          id: string
          nombre: string
          orden: number | null
          requiere_caducidad: boolean
          requiere_documento: boolean
        }
        Insert: {
          activo?: boolean
          categoria?: string
          codigo: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean
          id?: string
          nombre: string
          orden?: number | null
          requiere_caducidad?: boolean
          requiere_documento?: boolean
        }
        Update: {
          activo?: boolean
          categoria?: string
          codigo?: string
          created_at?: string
          descripcion?: string | null
          es_obligatorio?: boolean
          id?: string
          nombre?: string
          orden?: number | null
          requiere_caducidad?: boolean
          requiere_documento?: boolean
        }
        Relationships: []
      }
      plantilla_fases_construccion: {
        Row: {
          activo: boolean
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          orden: number
        }
        Insert: {
          activo?: boolean
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number
        }
        Update: {
          activo?: boolean
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number
        }
        Relationships: []
      }
      plantilla_pasos: {
        Row: {
          activo: boolean | null
          codigo: string
          columna: string
          created_at: string | null
          descripcion: string | null
          es_obligatorio: boolean | null
          id: string
          nombre: string
          orden: number
          plantilla_id: string
          requiere_documento: boolean | null
          tipo_documento_requerido: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          columna: string
          created_at?: string | null
          descripcion?: string | null
          es_obligatorio?: boolean | null
          id?: string
          nombre: string
          orden?: number
          plantilla_id: string
          requiere_documento?: boolean | null
          tipo_documento_requerido?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          columna?: string
          created_at?: string | null
          descripcion?: string | null
          es_obligatorio?: boolean | null
          id?: string
          nombre?: string
          orden?: number
          plantilla_id?: string
          requiere_documento?: boolean | null
          tipo_documento_requerido?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plantilla_pasos_plantilla_id_fkey"
            columns: ["plantilla_id"]
            isOneToOne: false
            referencedRelation: "plantillas_proceso"
            referencedColumns: ["id"]
          },
        ]
      }
      plantillas_documentales: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          ruta_storage: string
          tipo: Database["public"]["Enums"]["tipo_documento"]
          variables: Json | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          ruta_storage: string
          tipo: Database["public"]["Enums"]["tipo_documento"]
          variables?: Json | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          ruta_storage?: string
          tipo?: Database["public"]["Enums"]["tipo_documento"]
          variables?: Json | null
        }
        Relationships: []
      }
      plantillas_fases_obra: {
        Row: {
          activo: boolean | null
          created_at: string | null
          factor_intensidad: number | null
          id: string
          nombre_fase: string
          orden: number | null
          semanas_default: number | null
          tipo_obra: string
        }
        Insert: {
          activo?: boolean | null
          created_at?: string | null
          factor_intensidad?: number | null
          id?: string
          nombre_fase: string
          orden?: number | null
          semanas_default?: number | null
          tipo_obra: string
        }
        Update: {
          activo?: boolean | null
          created_at?: string | null
          factor_intensidad?: number | null
          id?: string
          nombre_fase?: string
          orden?: number | null
          semanas_default?: number | null
          tipo_obra?: string
        }
        Relationships: []
      }
      plantillas_proceso: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          tipologia_proyecto_codigo: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          tipologia_proyecto_codigo: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          tipologia_proyecto_codigo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      plantillas_requisitos_detalle: {
        Row: {
          created_at: string | null
          id: string
          obligatorio: boolean | null
          plantilla_id: string
          tipo_documento_id: string
          visibilidad: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          obligatorio?: boolean | null
          plantilla_id: string
          tipo_documento_id: string
          visibilidad?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          obligatorio?: boolean | null
          plantilla_id?: string
          tipo_documento_id?: string
          visibilidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "plantillas_requisitos_detalle_plantilla_id_fkey"
            columns: ["plantilla_id"]
            isOneToOne: false
            referencedRelation: "plantillas_requisitos_sc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plantillas_requisitos_detalle_tipo_documento_id_fkey"
            columns: ["tipo_documento_id"]
            isOneToOne: false
            referencedRelation: "tipos_documento_sc"
            referencedColumns: ["id"]
          },
        ]
      }
      plantillas_requisitos_sc: {
        Row: {
          activo: boolean | null
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      portal_accesos_log: {
        Row: {
          accion: string
          created_at: string | null
          id: string
          ip_address: unknown
          metadata: Json | null
          portal_config_id: string
          recurso_id: string | null
          recurso_nombre: string | null
          recurso_tipo: string | null
          referer: string | null
          user_agent: string | null
        }
        Insert: {
          accion: string
          created_at?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          portal_config_id: string
          recurso_id?: string | null
          recurso_nombre?: string | null
          recurso_tipo?: string | null
          referer?: string | null
          user_agent?: string | null
        }
        Update: {
          accion?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          portal_config_id?: string
          recurso_id?: string | null
          recurso_nombre?: string | null
          recurso_tipo?: string | null
          referer?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_accesos_log_portal_config_id_fkey"
            columns: ["portal_config_id"]
            isOneToOne: false
            referencedRelation: "portal_cliente_config"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_cliente_config: {
        Row: {
          color_primario: string | null
          color_secundario: string | null
          created_at: string | null
          created_by: string | null
          id: string
          idioma: string | null
          logo_abante_url: string | null
          logo_cliente_url: string | null
          max_accesos_dia: number | null
          mostrar_compras: boolean | null
          mostrar_contactos: boolean | null
          mostrar_definiciones: boolean | null
          mostrar_documentacion: boolean | null
          mostrar_gantt: boolean | null
          mostrar_produccion: boolean | null
          nombre_proyecto_cliente: string | null
          notas_internas: string | null
          proyecto_id: string
          token_acceso: string | null
          token_activo: boolean | null
          token_expira_at: string | null
          token_hash: string | null
          updated_at: string | null
          zona_horaria: string | null
        }
        Insert: {
          color_primario?: string | null
          color_secundario?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          idioma?: string | null
          logo_abante_url?: string | null
          logo_cliente_url?: string | null
          max_accesos_dia?: number | null
          mostrar_compras?: boolean | null
          mostrar_contactos?: boolean | null
          mostrar_definiciones?: boolean | null
          mostrar_documentacion?: boolean | null
          mostrar_gantt?: boolean | null
          mostrar_produccion?: boolean | null
          nombre_proyecto_cliente?: string | null
          notas_internas?: string | null
          proyecto_id: string
          token_acceso?: string | null
          token_activo?: boolean | null
          token_expira_at?: string | null
          token_hash?: string | null
          updated_at?: string | null
          zona_horaria?: string | null
        }
        Update: {
          color_primario?: string | null
          color_secundario?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          idioma?: string | null
          logo_abante_url?: string | null
          logo_cliente_url?: string | null
          max_accesos_dia?: number | null
          mostrar_compras?: boolean | null
          mostrar_contactos?: boolean | null
          mostrar_definiciones?: boolean | null
          mostrar_documentacion?: boolean | null
          mostrar_gantt?: boolean | null
          mostrar_produccion?: boolean | null
          nombre_proyecto_cliente?: string | null
          notas_internas?: string | null
          proyecto_id?: string
          token_acceso?: string | null
          token_activo?: boolean | null
          token_expira_at?: string | null
          token_hash?: string | null
          updated_at?: string | null
          zona_horaria?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_cliente_config_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: true
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      preferencias_empresa_configurador: {
        Row: {
          activo: boolean
          created_at: string
          id: string
          motivo: string | null
          opcion_id: string | null
          prioridad: number
          zona_geografica: string | null
        }
        Insert: {
          activo?: boolean
          created_at?: string
          id?: string
          motivo?: string | null
          opcion_id?: string | null
          prioridad?: number
          zona_geografica?: string | null
        }
        Update: {
          activo?: boolean
          created_at?: string
          id?: string
          motivo?: string | null
          opcion_id?: string | null
          prioridad?: number
          zona_geografica?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preferencias_empresa_configurador_opcion_id_fkey"
            columns: ["opcion_id"]
            isOneToOne: false
            referencedRelation: "opciones_configurador"
            referencedColumns: ["id"]
          },
        ]
      }
      presupuestos_presto: {
        Row: {
          archivo_origen: string | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          fecha_importacion: string | null
          id: string
          nombre: string
          proyecto_id: string | null
          total_presupuesto: number | null
          updated_at: string | null
        }
        Insert: {
          archivo_origen?: string | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          fecha_importacion?: string | null
          id?: string
          nombre: string
          proyecto_id?: string | null
          total_presupuesto?: number | null
          updated_at?: string | null
        }
        Update: {
          archivo_origen?: string | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          fecha_importacion?: string | null
          id?: string
          nombre?: string
          proyecto_id?: string | null
          total_presupuesto?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "presupuestos_presto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      produccion_ordenes: {
        Row: {
          codigo: string
          created_at: string | null
          created_by: string | null
          edificio_id: string | null
          estado: string | null
          fecha_prevista_fin: string | null
          fecha_prevista_inicio: string | null
          fecha_real_fin: string | null
          fecha_real_inicio: string | null
          id: string
          notas: string | null
          prioridad: number | null
          proyecto_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          codigo: string
          created_at?: string | null
          created_by?: string | null
          edificio_id?: string | null
          estado?: string | null
          fecha_prevista_fin?: string | null
          fecha_prevista_inicio?: string | null
          fecha_real_fin?: string | null
          fecha_real_inicio?: string | null
          id?: string
          notas?: string | null
          prioridad?: number | null
          proyecto_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          codigo?: string
          created_at?: string | null
          created_by?: string | null
          edificio_id?: string | null
          estado?: string | null
          fecha_prevista_fin?: string | null
          fecha_prevista_inicio?: string | null
          fecha_real_fin?: string | null
          fecha_real_inicio?: string | null
          id?: string
          notas?: string | null
          prioridad?: number | null
          proyecto_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "produccion_ordenes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produccion_ordenes_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produccion_ordenes_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produccion_ordenes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      produccion_tareas: {
        Row: {
          created_at: string | null
          descripcion: string | null
          estado: string | null
          fecha_prevista: string | null
          fecha_real: string | null
          id: string
          nombre: string
          notas: string | null
          orden_ejecucion: number
          orden_id: string
          responsable_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          estado?: string | null
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          nombre: string
          notas?: string | null
          orden_ejecucion?: number
          orden_id: string
          responsable_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          estado?: string | null
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          orden_ejecucion?: number
          orden_id?: string
          responsable_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "produccion_tareas_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "produccion_ordenes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produccion_tareas_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          activo: boolean
          apellidos: string | null
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          nombre: string
          telefono: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          activo?: boolean
          apellidos?: string | null
          avatar_url?: string | null
          created_at?: string
          email: string
          id?: string
          nombre: string
          telefono?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          activo?: boolean
          apellidos?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          nombre?: string
          telefono?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      progreso_compras_edificio: {
        Row: {
          capitulo_id: string
          created_at: string
          edificio_id: string
          estado: string
          fecha_pedido: string | null
          fecha_recepcion: string | null
          id: string
          notas: string | null
          progreso: number
          updated_at: string
        }
        Insert: {
          capitulo_id: string
          created_at?: string
          edificio_id: string
          estado?: string
          fecha_pedido?: string | null
          fecha_recepcion?: string | null
          id?: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Update: {
          capitulo_id?: string
          created_at?: string
          edificio_id?: string
          estado?: string
          fecha_pedido?: string | null
          fecha_recepcion?: string | null
          id?: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "progreso_compras_edificio_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_compras_teorico"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progreso_compras_edificio_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      progreso_estructura_proyecto: {
        Row: {
          completado_por_id: string | null
          created_at: string | null
          elemento_id: string
          estado: string
          fecha_completado: string | null
          fecha_inicio: string | null
          id: string
          notas: string | null
          proyecto_id: string
          tipo_elemento: string
          updated_at: string | null
        }
        Insert: {
          completado_por_id?: string | null
          created_at?: string | null
          elemento_id: string
          estado?: string
          fecha_completado?: string | null
          fecha_inicio?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
          tipo_elemento: string
          updated_at?: string | null
        }
        Update: {
          completado_por_id?: string | null
          created_at?: string | null
          elemento_id?: string
          estado?: string
          fecha_completado?: string | null
          fecha_inicio?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
          tipo_elemento?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progreso_estructura_proyecto_completado_por_id_fkey"
            columns: ["completado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progreso_estructura_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      progreso_produccion_edificio: {
        Row: {
          created_at: string
          edificio_id: string
          estado: string
          fase_id: string
          fecha_fin_real: string | null
          fecha_inicio_real: string | null
          id: string
          notas: string | null
          progreso: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          edificio_id: string
          estado?: string
          fase_id: string
          fecha_fin_real?: string | null
          fecha_inicio_real?: string | null
          id?: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          edificio_id?: string
          estado?: string
          fase_id?: string
          fecha_fin_real?: string | null
          fecha_inicio_real?: string | null
          id?: string
          notas?: string | null
          progreso?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "progreso_produccion_edificio_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progreso_produccion_edificio_fase_id_fkey"
            columns: ["fase_id"]
            isOneToOne: false
            referencedRelation: "fases_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      prompts_ia: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          modificado_por_id: string | null
          nombre: string
          orden: number | null
          prompt_sistema: string
          tipo: string
          updated_at: string | null
          variables_disponibles: string[] | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modificado_por_id?: string | null
          nombre: string
          orden?: number | null
          prompt_sistema: string
          tipo: string
          updated_at?: string | null
          variables_disponibles?: string[] | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modificado_por_id?: string | null
          nombre?: string
          orden?: number | null
          prompt_sistema?: string
          tipo?: string
          updated_at?: string | null
          variables_disponibles?: string[] | null
        }
        Relationships: []
      }
      proveedores: {
        Row: {
          categoria: string | null
          cif: string | null
          codigo: string
          codigo_postal: string | null
          condiciones_pago: string | null
          created_at: string
          datos_importados: Json | null
          dias_entrega: number | null
          direccion: string | null
          email: string | null
          es_subcontrata: boolean
          estado: Database["public"]["Enums"]["estado_registro"]
          fax: string | null
          forma_pago: string | null
          iban: string | null
          id: string
          localidad: string | null
          nombre: string
          notas: string | null
          origen_datos: string | null
          pais: string
          persona_contacto: string | null
          portal_activo: boolean
          provincia: string | null
          rating: number | null
          razon_social: string | null
          telefono: string | null
          telefono2: string | null
          tipo_proveedor: string
          ultima_oferta_fecha: string | null
          updated_at: string
          web: string | null
        }
        Insert: {
          categoria?: string | null
          cif?: string | null
          codigo: string
          codigo_postal?: string | null
          condiciones_pago?: string | null
          created_at?: string
          datos_importados?: Json | null
          dias_entrega?: number | null
          direccion?: string | null
          email?: string | null
          es_subcontrata?: boolean
          estado?: Database["public"]["Enums"]["estado_registro"]
          fax?: string | null
          forma_pago?: string | null
          iban?: string | null
          id?: string
          localidad?: string | null
          nombre: string
          notas?: string | null
          origen_datos?: string | null
          pais?: string
          persona_contacto?: string | null
          portal_activo?: boolean
          provincia?: string | null
          rating?: number | null
          razon_social?: string | null
          telefono?: string | null
          telefono2?: string | null
          tipo_proveedor?: string
          ultima_oferta_fecha?: string | null
          updated_at?: string
          web?: string | null
        }
        Update: {
          categoria?: string | null
          cif?: string | null
          codigo?: string
          codigo_postal?: string | null
          condiciones_pago?: string | null
          created_at?: string
          datos_importados?: Json | null
          dias_entrega?: number | null
          direccion?: string | null
          email?: string | null
          es_subcontrata?: boolean
          estado?: Database["public"]["Enums"]["estado_registro"]
          fax?: string | null
          forma_pago?: string | null
          iban?: string | null
          id?: string
          localidad?: string | null
          nombre?: string
          notas?: string | null
          origen_datos?: string | null
          pais?: string
          persona_contacto?: string | null
          portal_activo?: boolean
          provincia?: string | null
          rating?: number | null
          razon_social?: string | null
          telefono?: string | null
          telefono2?: string | null
          tipo_proveedor?: string
          ultima_oferta_fecha?: string | null
          updated_at?: string
          web?: string | null
        }
        Relationships: []
      }
      proyecto_fase_gates: {
        Row: {
          bloqueado: boolean | null
          contrato_id: string | null
          created_at: string
          desbloqueado_at: string | null
          desbloqueado_por_id: string | null
          fase_codigo: string
          fase_nombre: string
          id: string
          motivo_desbloqueo: string | null
          orden: number | null
          proyecto_id: string
          requiere_contrato_aceptado: boolean | null
          updated_at: string
        }
        Insert: {
          bloqueado?: boolean | null
          contrato_id?: string | null
          created_at?: string
          desbloqueado_at?: string | null
          desbloqueado_por_id?: string | null
          fase_codigo: string
          fase_nombre: string
          id?: string
          motivo_desbloqueo?: string | null
          orden?: number | null
          proyecto_id: string
          requiere_contrato_aceptado?: boolean | null
          updated_at?: string
        }
        Update: {
          bloqueado?: boolean | null
          contrato_id?: string | null
          created_at?: string
          desbloqueado_at?: string | null
          desbloqueado_por_id?: string | null
          fase_codigo?: string
          fase_nombre?: string
          id?: string
          motivo_desbloqueo?: string | null
          orden?: number | null
          proyecto_id?: string
          requiere_contrato_aceptado?: boolean | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_fase_gates_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_fase_gates_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      proyecto_pasos: {
        Row: {
          bloqueado_por: string | null
          codigo: string
          columna: string
          created_at: string | null
          created_by: string | null
          descripcion: string | null
          documento_id: string | null
          estado: string | null
          fecha_prevista: string | null
          fecha_real: string | null
          id: string
          nombre: string
          notas: string | null
          orden: number
          plantilla_paso_id: string | null
          proyecto_id: string
          requiere_documento: boolean | null
          responsable_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          bloqueado_por?: string | null
          codigo: string
          columna: string
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          documento_id?: string | null
          estado?: string | null
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          nombre: string
          notas?: string | null
          orden?: number
          plantilla_paso_id?: string | null
          proyecto_id: string
          requiere_documento?: boolean | null
          responsable_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          bloqueado_por?: string | null
          codigo?: string
          columna?: string
          created_at?: string | null
          created_by?: string | null
          descripcion?: string | null
          documento_id?: string | null
          estado?: string | null
          fecha_prevista?: string | null
          fecha_real?: string | null
          id?: string
          nombre?: string
          notas?: string | null
          orden?: number
          plantilla_paso_id?: string | null
          proyecto_id?: string
          requiere_documento?: boolean | null
          responsable_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_pasos_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_pasos_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_pasos_plantilla_paso_id_fkey"
            columns: ["plantilla_paso_id"]
            isOneToOne: false
            referencedRelation: "plantilla_pasos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_pasos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_pasos_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_pasos_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      proyecto_referencias: {
        Row: {
          created_at: string | null
          descripcion: string | null
          edificio_id: string | null
          id: string
          origen_codigo: string
          proyecto_id: string
          referencia: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          edificio_id?: string | null
          id?: string
          origen_codigo: string
          proyecto_id: string
          referencia: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          edificio_id?: string | null
          id?: string
          origen_codigo?: string
          proyecto_id?: string
          referencia?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyecto_referencias_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyecto_referencias_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      proyectos: {
        Row: {
          cantidad_edificios: number | null
          clase_suelo: string | null
          cliente_id: string | null
          codigo: string
          comercial_id: string | null
          coordenadas_x: number | null
          coordenadas_y: number | null
          coste_estimado: number | null
          coste_real: number | null
          created_at: string
          datos_catastro: Json | null
          descripcion: string | null
          direccion_obra: string | null
          edificios_definidos: boolean | null
          es_multi_edificio: boolean | null
          estado: Database["public"]["Enums"]["estado_proyecto"]
          estructura_inicializada: boolean | null
          fase_abante: Database["public"]["Enums"]["fase_abante"] | null
          fase_actual: string | null
          fase_comercial_cerrada: boolean | null
          fase_comercial_completada: boolean | null
          fecha_cierre_comercial: string | null
          fecha_confirmacion_hitos: string | null
          fecha_congelacion_matriz: string | null
          fecha_consulta_catastro: string | null
          fecha_fin_prevista: string | null
          fecha_fin_real: string | null
          fecha_inicio: string | null
          hitos_confirmados: boolean | null
          id: string
          localidad_obra: string | null
          margen_previsto: number | null
          margen_real: number | null
          matriz_congelada: boolean | null
          nombre: string
          notas: string | null
          oferta_aceptada_id: string | null
          oferta_origen_id: string | null
          plano_implantacion_path: string | null
          presupuesto_total: number | null
          provincia_obra: string | null
          referencia_catastral: string | null
          referencia_cliente: string | null
          referencia_obra: string | null
          superficie_catastral: number | null
          tecnico_id: string | null
          tipo: Database["public"]["Enums"]["tipo_proyecto"]
          tipo_cierre_comercial: string | null
          tipo_proyecto: string
          tipologia_obra_id: string | null
          updated_at: string
          uso_catastral: string | null
        }
        Insert: {
          cantidad_edificios?: number | null
          clase_suelo?: string | null
          cliente_id?: string | null
          codigo: string
          comercial_id?: string | null
          coordenadas_x?: number | null
          coordenadas_y?: number | null
          coste_estimado?: number | null
          coste_real?: number | null
          created_at?: string
          datos_catastro?: Json | null
          descripcion?: string | null
          direccion_obra?: string | null
          edificios_definidos?: boolean | null
          es_multi_edificio?: boolean | null
          estado?: Database["public"]["Enums"]["estado_proyecto"]
          estructura_inicializada?: boolean | null
          fase_abante?: Database["public"]["Enums"]["fase_abante"] | null
          fase_actual?: string | null
          fase_comercial_cerrada?: boolean | null
          fase_comercial_completada?: boolean | null
          fecha_cierre_comercial?: string | null
          fecha_confirmacion_hitos?: string | null
          fecha_congelacion_matriz?: string | null
          fecha_consulta_catastro?: string | null
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio?: string | null
          hitos_confirmados?: boolean | null
          id?: string
          localidad_obra?: string | null
          margen_previsto?: number | null
          margen_real?: number | null
          matriz_congelada?: boolean | null
          nombre: string
          notas?: string | null
          oferta_aceptada_id?: string | null
          oferta_origen_id?: string | null
          plano_implantacion_path?: string | null
          presupuesto_total?: number | null
          provincia_obra?: string | null
          referencia_catastral?: string | null
          referencia_cliente?: string | null
          referencia_obra?: string | null
          superficie_catastral?: number | null
          tecnico_id?: string | null
          tipo: Database["public"]["Enums"]["tipo_proyecto"]
          tipo_cierre_comercial?: string | null
          tipo_proyecto?: string
          tipologia_obra_id?: string | null
          updated_at?: string
          uso_catastral?: string | null
        }
        Update: {
          cantidad_edificios?: number | null
          clase_suelo?: string | null
          cliente_id?: string | null
          codigo?: string
          comercial_id?: string | null
          coordenadas_x?: number | null
          coordenadas_y?: number | null
          coste_estimado?: number | null
          coste_real?: number | null
          created_at?: string
          datos_catastro?: Json | null
          descripcion?: string | null
          direccion_obra?: string | null
          edificios_definidos?: boolean | null
          es_multi_edificio?: boolean | null
          estado?: Database["public"]["Enums"]["estado_proyecto"]
          estructura_inicializada?: boolean | null
          fase_abante?: Database["public"]["Enums"]["fase_abante"] | null
          fase_actual?: string | null
          fase_comercial_cerrada?: boolean | null
          fase_comercial_completada?: boolean | null
          fecha_cierre_comercial?: string | null
          fecha_confirmacion_hitos?: string | null
          fecha_congelacion_matriz?: string | null
          fecha_consulta_catastro?: string | null
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio?: string | null
          hitos_confirmados?: boolean | null
          id?: string
          localidad_obra?: string | null
          margen_previsto?: number | null
          margen_real?: number | null
          matriz_congelada?: boolean | null
          nombre?: string
          notas?: string | null
          oferta_aceptada_id?: string | null
          oferta_origen_id?: string | null
          plano_implantacion_path?: string | null
          presupuesto_total?: number | null
          provincia_obra?: string | null
          referencia_catastral?: string | null
          referencia_cliente?: string | null
          referencia_obra?: string | null
          superficie_catastral?: number | null
          tecnico_id?: string | null
          tipo?: Database["public"]["Enums"]["tipo_proyecto"]
          tipo_cierre_comercial?: string | null
          tipo_proyecto?: string
          tipologia_obra_id?: string | null
          updated_at?: string
          uso_catastral?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proyectos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_comercial_id_fkey"
            columns: ["comercial_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_oferta_aceptada_id_fkey"
            columns: ["oferta_aceptada_id"]
            isOneToOne: false
            referencedRelation: "historico_ofertas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_oferta_origen_id_fkey"
            columns: ["oferta_origen_id"]
            isOneToOne: false
            referencedRelation: "ofertas_abante"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_tecnico_id_fkey"
            columns: ["tecnico_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_tipologia_obra_id_fkey"
            columns: ["tipologia_obra_id"]
            isOneToOne: false
            referencedRelation: "catalogo_tipologias_proyecto"
            referencedColumns: ["id"]
          },
        ]
      }
      proyectos_estructura_espacial: {
        Row: {
          ciudad_obra: string | null
          coste_alojamiento_dia: number | null
          coste_dieta_dia: number | null
          coste_dietas: number | null
          coste_directo_total: number | null
          coste_estructural: number | null
          coste_indirecto_total: number | null
          coste_mano_obra: number | null
          coste_maquinaria: number | null
          coste_proveedores: number | null
          created_at: string | null
          created_by: string | null
          dias_retorno_casa: number | null
          dias_trabajo_semana: number | null
          direccion_obra: string | null
          duracion_estimada_dias: number | null
          estado: string
          fecha_inicio_prevista: string | null
          horas_trabajo_dia: number | null
          horas_viaje_ida: number | null
          id: string
          incluye_alojamiento: boolean | null
          km_desde_jerez: number | null
          lugar_obra: string | null
          margen_aplicado: number | null
          observaciones: string | null
          pais_obra: string | null
          precio_hora_extra: number | null
          precio_oferta: number | null
          proyecto_id: string
          servidor_enlace_activo: boolean | null
          servidor_externo_id: string | null
          servidor_path_proyecto: string | null
          servidor_url_proyecto: string | null
          superficie_obra_m2: number | null
          tipo_dieta: string | null
          updated_at: string | null
          updated_by: string | null
          velocidad_media_kmh: number | null
        }
        Insert: {
          ciudad_obra?: string | null
          coste_alojamiento_dia?: number | null
          coste_dieta_dia?: number | null
          coste_dietas?: number | null
          coste_directo_total?: number | null
          coste_estructural?: number | null
          coste_indirecto_total?: number | null
          coste_mano_obra?: number | null
          coste_maquinaria?: number | null
          coste_proveedores?: number | null
          created_at?: string | null
          created_by?: string | null
          dias_retorno_casa?: number | null
          dias_trabajo_semana?: number | null
          direccion_obra?: string | null
          duracion_estimada_dias?: number | null
          estado?: string
          fecha_inicio_prevista?: string | null
          horas_trabajo_dia?: number | null
          horas_viaje_ida?: number | null
          id?: string
          incluye_alojamiento?: boolean | null
          km_desde_jerez?: number | null
          lugar_obra?: string | null
          margen_aplicado?: number | null
          observaciones?: string | null
          pais_obra?: string | null
          precio_hora_extra?: number | null
          precio_oferta?: number | null
          proyecto_id: string
          servidor_enlace_activo?: boolean | null
          servidor_externo_id?: string | null
          servidor_path_proyecto?: string | null
          servidor_url_proyecto?: string | null
          superficie_obra_m2?: number | null
          tipo_dieta?: string | null
          updated_at?: string | null
          updated_by?: string | null
          velocidad_media_kmh?: number | null
        }
        Update: {
          ciudad_obra?: string | null
          coste_alojamiento_dia?: number | null
          coste_dieta_dia?: number | null
          coste_dietas?: number | null
          coste_directo_total?: number | null
          coste_estructural?: number | null
          coste_indirecto_total?: number | null
          coste_mano_obra?: number | null
          coste_maquinaria?: number | null
          coste_proveedores?: number | null
          created_at?: string | null
          created_by?: string | null
          dias_retorno_casa?: number | null
          dias_trabajo_semana?: number | null
          direccion_obra?: string | null
          duracion_estimada_dias?: number | null
          estado?: string
          fecha_inicio_prevista?: string | null
          horas_trabajo_dia?: number | null
          horas_viaje_ida?: number | null
          id?: string
          incluye_alojamiento?: boolean | null
          km_desde_jerez?: number | null
          lugar_obra?: string | null
          margen_aplicado?: number | null
          observaciones?: string | null
          pais_obra?: string | null
          precio_hora_extra?: number | null
          precio_oferta?: number | null
          proyecto_id?: string
          servidor_enlace_activo?: boolean | null
          servidor_externo_id?: string | null
          servidor_path_proyecto?: string | null
          servidor_url_proyecto?: string | null
          superficie_obra_m2?: number | null
          tipo_dieta?: string | null
          updated_at?: string | null
          updated_by?: string | null
          velocidad_media_kmh?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proyectos_estructura_espacial_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: true
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proyectos_estructura_espacial_servidor_externo_id_fkey"
            columns: ["servidor_externo_id"]
            isOneToOne: false
            referencedRelation: "servidores_externos"
            referencedColumns: ["id"]
          },
        ]
      }
      ptp: {
        Row: {
          alcance_id: string | null
          codigo: string
          created_at: string
          descripcion: string | null
          edificio_id: string | null
          estado: Database["public"]["Enums"]["estado_ptp"]
          fecha_entrega: string | null
          fecha_requerida: string
          fecha_validacion: string | null
          habilita_compras: boolean | null
          habilita_montaje: boolean | null
          habilita_produccion: boolean | null
          id: string
          informacion_entregada: Json | null
          informacion_requerida: Json | null
          nombre: string
          notas: string | null
          porcentaje_completado: number | null
          proyecto_id: string
          responsable_id: string | null
          sistema: string
          updated_at: string
          validado_por_id: string | null
        }
        Insert: {
          alcance_id?: string | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          estado?: Database["public"]["Enums"]["estado_ptp"]
          fecha_entrega?: string | null
          fecha_requerida: string
          fecha_validacion?: string | null
          habilita_compras?: boolean | null
          habilita_montaje?: boolean | null
          habilita_produccion?: boolean | null
          id?: string
          informacion_entregada?: Json | null
          informacion_requerida?: Json | null
          nombre: string
          notas?: string | null
          porcentaje_completado?: number | null
          proyecto_id: string
          responsable_id?: string | null
          sistema: string
          updated_at?: string
          validado_por_id?: string | null
        }
        Update: {
          alcance_id?: string | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          edificio_id?: string | null
          estado?: Database["public"]["Enums"]["estado_ptp"]
          fecha_entrega?: string | null
          fecha_requerida?: string
          fecha_validacion?: string | null
          habilita_compras?: boolean | null
          habilita_montaje?: boolean | null
          habilita_produccion?: boolean | null
          id?: string
          informacion_entregada?: Json | null
          informacion_requerida?: Json | null
          nombre?: string
          notas?: string | null
          porcentaje_completado?: number | null
          proyecto_id?: string
          responsable_id?: string | null
          sistema?: string
          updated_at?: string
          validado_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ptp_alcance_id_fkey"
            columns: ["alcance_id"]
            isOneToOne: false
            referencedRelation: "matriz_alcances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ptp_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ptp_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ptp_responsable_id_fkey"
            columns: ["responsable_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ptp_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      ptp_express: {
        Row: {
          adjunto_url: string | null
          area: string | null
          codigo: string | null
          created_at: string
          descripcion_problema: string | null
          detectado_por: string | null
          documentacion: string | null
          elemento: string | null
          estado_compras: string | null
          estado_final: string | null
          estado_produccion: string | null
          fase: string | null
          fecha: string | null
          firma_solicitante: string | null
          firma_tecnica: string | null
          id: string
          impacto_coste: string | null
          impacto_plazo: string | null
          materiales: string | null
          n_ptp: string | null
          notas_croquis: string | null
          proyecto: string | null
          responsable: string | null
          solucion: string | null
          updated_at: string
          validado_por: string | null
          validez_fecha: string | null
          zona: string | null
        }
        Insert: {
          adjunto_url?: string | null
          area?: string | null
          codigo?: string | null
          created_at?: string
          descripcion_problema?: string | null
          detectado_por?: string | null
          documentacion?: string | null
          elemento?: string | null
          estado_compras?: string | null
          estado_final?: string | null
          estado_produccion?: string | null
          fase?: string | null
          fecha?: string | null
          firma_solicitante?: string | null
          firma_tecnica?: string | null
          id?: string
          impacto_coste?: string | null
          impacto_plazo?: string | null
          materiales?: string | null
          n_ptp?: string | null
          notas_croquis?: string | null
          proyecto?: string | null
          responsable?: string | null
          solucion?: string | null
          updated_at?: string
          validado_por?: string | null
          validez_fecha?: string | null
          zona?: string | null
        }
        Update: {
          adjunto_url?: string | null
          area?: string | null
          codigo?: string | null
          created_at?: string
          descripcion_problema?: string | null
          detectado_por?: string | null
          documentacion?: string | null
          elemento?: string | null
          estado_compras?: string | null
          estado_final?: string | null
          estado_produccion?: string | null
          fase?: string | null
          fecha?: string | null
          firma_solicitante?: string | null
          firma_tecnica?: string | null
          id?: string
          impacto_coste?: string | null
          impacto_plazo?: string | null
          materiales?: string | null
          n_ptp?: string | null
          notas_croquis?: string | null
          proyecto?: string | null
          responsable?: string | null
          solucion?: string | null
          updated_at?: string
          validado_por?: string | null
          validez_fecha?: string | null
          zona?: string | null
        }
        Relationships: []
      }
      puestos: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string
          departamento_id: string | null
          descripcion: string | null
          id: string
          nombre: string
          salario_maximo: number | null
          salario_minimo: number | null
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string
          departamento_id?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          salario_maximo?: number | null
          salario_minimo?: number | null
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string
          departamento_id?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          salario_maximo?: number | null
          salario_minimo?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "puestos_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
        ]
      }
      recepciones: {
        Row: {
          albaran_proveedor: string | null
          codigo: string
          conforme: boolean | null
          created_at: string
          fecha_recepcion: string
          id: string
          incidencias: string | null
          observaciones: string | null
          pedido_id: string
          recibido_por_id: string | null
        }
        Insert: {
          albaran_proveedor?: string | null
          codigo: string
          conforme?: boolean | null
          created_at?: string
          fecha_recepcion?: string
          id?: string
          incidencias?: string | null
          observaciones?: string | null
          pedido_id: string
          recibido_por_id?: string | null
        }
        Update: {
          albaran_proveedor?: string | null
          codigo?: string
          conforme?: boolean | null
          created_at?: string
          fecha_recepcion?: string
          id?: string
          incidencias?: string | null
          observaciones?: string | null
          pedido_id?: string
          recibido_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recepciones_pedido_id_fkey"
            columns: ["pedido_id"]
            isOneToOne: false
            referencedRelation: "pedidos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recepciones_recibido_por_id_fkey"
            columns: ["recibido_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      recordatorios_oferta: {
        Row: {
          activo: boolean | null
          completado: boolean | null
          created_at: string
          created_by: string | null
          envio_oferta_id: string
          frecuencia_dias: number | null
          id: string
          last_sent_at: string | null
          next_reminder_at: string
          oferta_id: string
        }
        Insert: {
          activo?: boolean | null
          completado?: boolean | null
          created_at?: string
          created_by?: string | null
          envio_oferta_id: string
          frecuencia_dias?: number | null
          id?: string
          last_sent_at?: string | null
          next_reminder_at: string
          oferta_id: string
        }
        Update: {
          activo?: boolean | null
          completado?: boolean | null
          created_at?: string
          created_by?: string | null
          envio_oferta_id?: string
          frecuencia_dias?: number | null
          id?: string
          last_sent_at?: string | null
          next_reminder_at?: string
          oferta_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recordatorios_oferta_envio_oferta_id_fkey"
            columns: ["envio_oferta_id"]
            isOneToOne: false
            referencedRelation: "envios_oferta"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recordatorios_oferta_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_comerciales"
            referencedColumns: ["id"]
          },
        ]
      }
      registro_ia: {
        Row: {
          created_at: string
          datos_entrada: Json | null
          fase: string | null
          id: string
          motor: string
          oferta_id: string | null
          prompt: string
          proyecto_id: string | null
          respuesta: string
          tipo: string
          usuario_id: string | null
        }
        Insert: {
          created_at?: string
          datos_entrada?: Json | null
          fase?: string | null
          id?: string
          motor: string
          oferta_id?: string | null
          prompt: string
          proyecto_id?: string | null
          respuesta: string
          tipo: string
          usuario_id?: string | null
        }
        Update: {
          created_at?: string
          datos_entrada?: Json | null
          fase?: string | null
          id?: string
          motor?: string
          oferta_id?: string | null
          prompt?: string
          proyecto_id?: string | null
          respuesta?: string
          tipo?: string
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registro_ia_oferta_id_fkey"
            columns: ["oferta_id"]
            isOneToOne: false
            referencedRelation: "ofertas_abante"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registro_ia_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_control_inversion: {
        Row: {
          anio: number | null
          categoria_id: string
          centro_trabajo_id: string
          concepto: string
          created_at: string | null
          created_by: string | null
          documento_referencia: string | null
          fecha: string
          gasto_estructural_id: string | null
          id: string
          importe: number
          mes: number | null
          notas: string | null
          trabajador_id: string | null
          updated_at: string | null
        }
        Insert: {
          anio?: number | null
          categoria_id: string
          centro_trabajo_id: string
          concepto: string
          created_at?: string | null
          created_by?: string | null
          documento_referencia?: string | null
          fecha?: string
          gasto_estructural_id?: string | null
          id?: string
          importe?: number
          mes?: number | null
          notas?: string | null
          trabajador_id?: string | null
          updated_at?: string | null
        }
        Update: {
          anio?: number | null
          categoria_id?: string
          centro_trabajo_id?: string
          concepto?: string
          created_at?: string | null
          created_by?: string | null
          documento_referencia?: string | null
          fecha?: string
          gasto_estructural_id?: string | null
          id?: string
          importe?: number
          mes?: number | null
          notas?: string | null
          trabajador_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registros_control_inversion_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_gasto_ci"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_control_inversion_centro_trabajo_id_fkey"
            columns: ["centro_trabajo_id"]
            isOneToOne: false
            referencedRelation: "centros_trabajo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_control_inversion_gasto_estructural_id_fkey"
            columns: ["gasto_estructural_id"]
            isOneToOne: false
            referencedRelation: "gastos_estructurales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_control_inversion_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_mensuales_trabajadores: {
        Row: {
          anio: number
          anticipos: number | null
          bajas_dias: number | null
          base_salarial: number | null
          campos_extra: Json | null
          cerrado_por_id: string | null
          complementos: number | null
          coste_baja_dia: number | null
          coste_total_mes: number | null
          created_at: string
          deducciones: number | null
          dias_trabajados: number | null
          dietas: number | null
          estado_mes: string | null
          fecha_cierre: string | null
          horas_extras: number | null
          horas_nocturnas: number | null
          horas_ordinarias: number | null
          horas_totales: number | null
          id: string
          kilometraje: number | null
          liquido_percibir: number | null
          mes: number
          origen_importacion: string | null
          plus_peligrosidad: number | null
          plus_productividad: number | null
          trabajador_id: string | null
          updated_at: string
          vacaciones_dias: number | null
        }
        Insert: {
          anio: number
          anticipos?: number | null
          bajas_dias?: number | null
          base_salarial?: number | null
          campos_extra?: Json | null
          cerrado_por_id?: string | null
          complementos?: number | null
          coste_baja_dia?: number | null
          coste_total_mes?: number | null
          created_at?: string
          deducciones?: number | null
          dias_trabajados?: number | null
          dietas?: number | null
          estado_mes?: string | null
          fecha_cierre?: string | null
          horas_extras?: number | null
          horas_nocturnas?: number | null
          horas_ordinarias?: number | null
          horas_totales?: number | null
          id?: string
          kilometraje?: number | null
          liquido_percibir?: number | null
          mes: number
          origen_importacion?: string | null
          plus_peligrosidad?: number | null
          plus_productividad?: number | null
          trabajador_id?: string | null
          updated_at?: string
          vacaciones_dias?: number | null
        }
        Update: {
          anio?: number
          anticipos?: number | null
          bajas_dias?: number | null
          base_salarial?: number | null
          campos_extra?: Json | null
          cerrado_por_id?: string | null
          complementos?: number | null
          coste_baja_dia?: number | null
          coste_total_mes?: number | null
          created_at?: string
          deducciones?: number | null
          dias_trabajados?: number | null
          dietas?: number | null
          estado_mes?: string | null
          fecha_cierre?: string | null
          horas_extras?: number | null
          horas_nocturnas?: number | null
          horas_ordinarias?: number | null
          horas_totales?: number | null
          id?: string
          kilometraje?: number | null
          liquido_percibir?: number | null
          mes?: number
          origen_importacion?: string | null
          plus_peligrosidad?: number | null
          plus_productividad?: number | null
          trabajador_id?: string | null
          updated_at?: string
          vacaciones_dias?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "registros_mensuales_trabajadores_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_tiempo: {
        Row: {
          created_at: string
          descripcion_trabajo: string | null
          fecha: string
          hora_fin: string | null
          hora_inicio: string
          horas_trabajadas: number | null
          id: string
          tarea_id: string
          trabajador_id: string
          validado: boolean | null
          validado_por_id: string | null
        }
        Insert: {
          created_at?: string
          descripcion_trabajo?: string | null
          fecha?: string
          hora_fin?: string | null
          hora_inicio: string
          horas_trabajadas?: number | null
          id?: string
          tarea_id: string
          trabajador_id: string
          validado?: boolean | null
          validado_por_id?: string | null
        }
        Update: {
          created_at?: string
          descripcion_trabajo?: string | null
          fecha?: string
          hora_fin?: string | null
          hora_inicio?: string
          horas_trabajadas?: number | null
          id?: string
          tarea_id?: string
          trabajador_id?: string
          validado?: boolean | null
          validado_por_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registros_tiempo_tarea_id_fkey"
            columns: ["tarea_id"]
            isOneToOne: false
            referencedRelation: "tareas_produccion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_tiempo_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_tiempo_validado_por_id_fkey"
            columns: ["validado_por_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_tiempo_tecnicos: {
        Row: {
          created_at: string
          fecha_registro: string
          horas: number
          id: string
          notas: string | null
          proyecto_id: string
          tipo_registro: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          fecha_registro?: string
          horas?: number
          id?: string
          notas?: string | null
          proyecto_id: string
          tipo_registro?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          fecha_registro?: string
          horas?: number
          id?: string
          notas?: string | null
          proyecto_id?: string
          tipo_registro?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "registros_tiempo_tecnicos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      reglas_cte: {
        Row: {
          activo: boolean
          altura_libre_minima_m: number
          articulo_cte: string | null
          codigo: string
          created_at: string
          descripcion: string | null
          id: string
          lado_minimo_m: number | null
          requiere_luz_natural: boolean | null
          requiere_ventilacion_natural: boolean | null
          superficie_minima_m2: number
          superficie_recomendada_m2: number | null
          superficie_ventana_minima_m2: number | null
          tipo_estancia: string
        }
        Insert: {
          activo?: boolean
          altura_libre_minima_m?: number
          articulo_cte?: string | null
          codigo: string
          created_at?: string
          descripcion?: string | null
          id?: string
          lado_minimo_m?: number | null
          requiere_luz_natural?: boolean | null
          requiere_ventilacion_natural?: boolean | null
          superficie_minima_m2: number
          superficie_recomendada_m2?: number | null
          superficie_ventana_minima_m2?: number | null
          tipo_estancia: string
        }
        Update: {
          activo?: boolean
          altura_libre_minima_m?: number
          articulo_cte?: string | null
          codigo?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          lado_minimo_m?: number | null
          requiere_luz_natural?: boolean | null
          requiere_ventilacion_natural?: boolean | null
          superficie_minima_m2?: number
          superficie_recomendada_m2?: number | null
          superficie_ventana_minima_m2?: number | null
          tipo_estancia?: string
        }
        Relationships: []
      }
      requisitos_actividad_sc: {
        Row: {
          actividad: string
          created_at: string | null
          id: string
          obligatorio: boolean | null
          tipo_documento_id: string
          visibilidad: string
        }
        Insert: {
          actividad: string
          created_at?: string | null
          id?: string
          obligatorio?: boolean | null
          tipo_documento_id: string
          visibilidad?: string
        }
        Update: {
          actividad?: string
          created_at?: string | null
          id?: string
          obligatorio?: boolean | null
          tipo_documento_id?: string
          visibilidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "requisitos_actividad_sc_tipo_documento_id_fkey"
            columns: ["tipo_documento_id"]
            isOneToOne: false
            referencedRelation: "tipos_documento_sc"
            referencedColumns: ["id"]
          },
        ]
      }
      requisitos_documentales_proyecto: {
        Row: {
          created_at: string
          id: string
          obligatorio: boolean
          proyecto_id: string
          tipo_documento_id: string
          visibilidad: string
        }
        Insert: {
          created_at?: string
          id?: string
          obligatorio?: boolean
          proyecto_id: string
          tipo_documento_id: string
          visibilidad?: string
        }
        Update: {
          created_at?: string
          id?: string
          obligatorio?: boolean
          proyecto_id?: string
          tipo_documento_id?: string
          visibilidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "requisitos_documentales_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitos_documentales_proyecto_tipo_documento_id_fkey"
            columns: ["tipo_documento_id"]
            isOneToOne: false
            referencedRelation: "tipos_documento_sc"
            referencedColumns: ["id"]
          },
        ]
      }
      requisitos_subcontrata_sc: {
        Row: {
          created_at: string | null
          id: string
          notas: string | null
          obligatorio: boolean | null
          proveedor_id: string
          tipo_documento_id: string
          visibilidad: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          notas?: string | null
          obligatorio?: boolean | null
          proveedor_id: string
          tipo_documento_id: string
          visibilidad?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          notas?: string | null
          obligatorio?: boolean | null
          proveedor_id?: string
          tipo_documento_id?: string
          visibilidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "requisitos_subcontrata_sc_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitos_subcontrata_sc_tipo_documento_id_fkey"
            columns: ["tipo_documento_id"]
            isOneToOne: false
            referencedRelation: "tipos_documento_sc"
            referencedColumns: ["id"]
          },
        ]
      }
      restricciones_configurador: {
        Row: {
          activo: boolean
          created_at: string
          descripcion: string | null
          id: string
          mensaje_error: string | null
          nombre: string
          regla: Json
          tipo: string
        }
        Insert: {
          activo?: boolean
          created_at?: string
          descripcion?: string | null
          id?: string
          mensaje_error?: string | null
          nombre: string
          regla: Json
          tipo: string
        }
        Update: {
          activo?: boolean
          created_at?: string
          descripcion?: string | null
          id?: string
          mensaje_error?: string | null
          nombre?: string
          regla?: Json
          tipo?: string
        }
        Relationships: []
      }
      revisiones_medicas_trabajadores: {
        Row: {
          centro_medico: string | null
          created_at: string
          documento_url: string | null
          fecha_proxima: string | null
          fecha_revision: string
          id: string
          observaciones: string | null
          resultado: string | null
          tipo: string
          trabajador_id: string
          updated_at: string
        }
        Insert: {
          centro_medico?: string | null
          created_at?: string
          documento_url?: string | null
          fecha_proxima?: string | null
          fecha_revision: string
          id?: string
          observaciones?: string | null
          resultado?: string | null
          tipo?: string
          trabajador_id: string
          updated_at?: string
        }
        Update: {
          centro_medico?: string | null
          created_at?: string
          documento_url?: string | null
          fecha_proxima?: string | null
          fecha_revision?: string
          id?: string
          observaciones?: string | null
          resultado?: string | null
          tipo?: string
          trabajador_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "revisiones_medicas_trabajadores_trabajador_id_fkey"
            columns: ["trabajador_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
        ]
      }
      servidores_externos: {
        Row: {
          activo: boolean
          configuracion: Json
          created_at: string
          created_by: string | null
          descripcion: string | null
          id: string
          nombre: string
          tipo_servidor: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          activo?: boolean
          configuracion?: Json
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          tipo_servidor: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          activo?: boolean
          configuracion?: Json
          created_at?: string
          created_by?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          tipo_servidor?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      session_logs: {
        Row: {
          created_at: string
          email: string | null
          id: string
          ip_address: string | null
          tipo: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          tipo: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          tipo?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      sistemas_categorias: {
        Row: {
          activo: boolean | null
          codigo: string
          color: string | null
          created_at: string | null
          descripcion: string | null
          icono: string | null
          id: string
          nombre: string
          orden: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre: string
          orden?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          color?: string | null
          created_at?: string | null
          descripcion?: string | null
          icono?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sistemas_componentes: {
        Row: {
          activo: boolean | null
          cantidad: number | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          modulo_id: string | null
          nombre: string
          orden: number | null
          precio_unitario: number | null
          unidad: string | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          cantidad?: number | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modulo_id?: string | null
          nombre: string
          orden?: number | null
          precio_unitario?: number | null
          unidad?: string | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          cantidad?: number | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          modulo_id?: string | null
          nombre?: string
          orden?: number | null
          precio_unitario?: number | null
          unidad?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sistemas_componentes_modulo_id_fkey"
            columns: ["modulo_id"]
            isOneToOne: false
            referencedRelation: "sistemas_modulos"
            referencedColumns: ["id"]
          },
        ]
      }
      sistemas_modulos: {
        Row: {
          activo: boolean | null
          categoria_id: string | null
          codigo: string
          coste_base: number | null
          created_at: string | null
          descripcion: string | null
          dimensiones: Json | null
          id: string
          nombre: string
          orden: number | null
          peso_base: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          categoria_id?: string | null
          codigo: string
          coste_base?: number | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones?: Json | null
          id?: string
          nombre: string
          orden?: number | null
          peso_base?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          categoria_id?: string | null
          codigo?: string
          coste_base?: number | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones?: Json | null
          id?: string
          nombre?: string
          orden?: number | null
          peso_base?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sistemas_modulos_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "sistemas_categorias"
            referencedColumns: ["id"]
          },
        ]
      }
      sistemas_variantes: {
        Row: {
          activo: boolean | null
          codigo: string
          componente_id: string | null
          created_at: string | null
          descripcion: string | null
          es_default: boolean | null
          id: string
          incremento_precio: number | null
          nombre: string
          orden: number | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          componente_id?: string | null
          created_at?: string | null
          descripcion?: string | null
          es_default?: boolean | null
          id?: string
          incremento_precio?: number | null
          nombre: string
          orden?: number | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          componente_id?: string | null
          created_at?: string | null
          descripcion?: string | null
          es_default?: boolean | null
          id?: string
          incremento_precio?: number | null
          nombre?: string
          orden?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sistemas_variantes_componente_id_fkey"
            columns: ["componente_id"]
            isOneToOne: false
            referencedRelation: "sistemas_componentes"
            referencedColumns: ["id"]
          },
        ]
      }
      subcapitulos_capitulos: {
        Row: {
          capitulo_id: string
          created_at: string | null
          es_obligatorio: boolean | null
          id: string
          orden: number | null
          subcapitulo_id: string
        }
        Insert: {
          capitulo_id: string
          created_at?: string | null
          es_obligatorio?: boolean | null
          id?: string
          orden?: number | null
          subcapitulo_id: string
        }
        Update: {
          capitulo_id?: string
          created_at?: string | null
          es_obligatorio?: boolean | null
          id?: string
          orden?: number | null
          subcapitulo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcapitulos_capitulos_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "capitulos_fase"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcapitulos_capitulos_subcapitulo_id_fkey"
            columns: ["subcapitulo_id"]
            isOneToOne: false
            referencedRelation: "subcapitulos_maestro"
            referencedColumns: ["id"]
          },
        ]
      }
      subcapitulos_maestro: {
        Row: {
          activo: boolean | null
          codigo: string
          created_at: string | null
          descripcion: string | null
          id: string
          nombre: string
          orden: number | null
          protegido: boolean | null
          updated_at: string | null
        }
        Insert: {
          activo?: boolean | null
          codigo: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre: string
          orden?: number | null
          protegido?: boolean | null
          updated_at?: string | null
        }
        Update: {
          activo?: boolean | null
          codigo?: string
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre?: string
          orden?: number | null
          protegido?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subcontrata_detalle: {
        Row: {
          actividad: string | null
          created_at: string
          estado: Database["public"]["Enums"]["estado_subcontrata"]
          fecha_alta_modulo: string
          id: string
          observaciones: string | null
          proveedor_id: string
          responsable_email: string | null
          responsable_nombre: string | null
          responsable_telefono: string | null
          updated_at: string
        }
        Insert: {
          actividad?: string | null
          created_at?: string
          estado?: Database["public"]["Enums"]["estado_subcontrata"]
          fecha_alta_modulo?: string
          id?: string
          observaciones?: string | null
          proveedor_id: string
          responsable_email?: string | null
          responsable_nombre?: string | null
          responsable_telefono?: string | null
          updated_at?: string
        }
        Update: {
          actividad?: string | null
          created_at?: string
          estado?: Database["public"]["Enums"]["estado_subcontrata"]
          fecha_alta_modulo?: string
          id?: string
          observaciones?: string | null
          proveedor_id?: string
          responsable_email?: string | null
          responsable_nombre?: string | null
          responsable_telefono?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcontrata_detalle_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: true
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
      subcontrata_proyectos: {
        Row: {
          created_at: string
          fecha_fin: string | null
          fecha_inicio: string | null
          id: string
          localizacion_detalle: string | null
          observaciones: string | null
          proveedor_id: string
          proyecto_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          localizacion_detalle?: string | null
          observaciones?: string | null
          proveedor_id: string
          proyecto_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          localizacion_detalle?: string | null
          observaciones?: string | null
          proveedor_id?: string
          proyecto_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcontrata_proyectos_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcontrata_proyectos_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      subcontratas: {
        Row: {
          cif: string | null
          codigo: string
          condiciones_pago: string | null
          created_at: string
          direccion: string | null
          documentacion_completa: boolean | null
          email: string | null
          especialidad: string
          estado: Database["public"]["Enums"]["estado_registro"]
          fecha_vencimiento_seguro: string | null
          id: string
          localidad: string | null
          nombre: string
          notas: string | null
          persona_contacto: string | null
          precio_hora: number | null
          provincia: string | null
          rating: number | null
          razon_social: string | null
          seguro_vigente: boolean | null
          telefono: string | null
          updated_at: string
        }
        Insert: {
          cif?: string | null
          codigo: string
          condiciones_pago?: string | null
          created_at?: string
          direccion?: string | null
          documentacion_completa?: boolean | null
          email?: string | null
          especialidad: string
          estado?: Database["public"]["Enums"]["estado_registro"]
          fecha_vencimiento_seguro?: string | null
          id?: string
          localidad?: string | null
          nombre: string
          notas?: string | null
          persona_contacto?: string | null
          precio_hora?: number | null
          provincia?: string | null
          rating?: number | null
          razon_social?: string | null
          seguro_vigente?: boolean | null
          telefono?: string | null
          updated_at?: string
        }
        Update: {
          cif?: string | null
          codigo?: string
          condiciones_pago?: string | null
          created_at?: string
          direccion?: string | null
          documentacion_completa?: boolean | null
          email?: string | null
          especialidad?: string
          estado?: Database["public"]["Enums"]["estado_registro"]
          fecha_vencimiento_seguro?: string | null
          id?: string
          localidad?: string | null
          nombre?: string
          notas?: string | null
          persona_contacto?: string | null
          precio_hora?: number | null
          provincia?: string | null
          rating?: number | null
          razon_social?: string | null
          seguro_vigente?: boolean | null
          telefono?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      subcontratas_proyecto: {
        Row: {
          created_at: string
          edificio_id: string | null
          especialidad: string | null
          estado: string
          fecha_fin_prevista: string | null
          fecha_fin_real: string | null
          fecha_inicio_prevista: string | null
          fecha_inicio_real: string | null
          id: string
          importe_contratado: number
          nombre_subcontrata: string
          notas: string | null
          porcentaje_avance: number
          proyecto_id: string
          subcontrata_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          edificio_id?: string | null
          especialidad?: string | null
          estado?: string
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_prevista?: string | null
          fecha_inicio_real?: string | null
          id?: string
          importe_contratado?: number
          nombre_subcontrata: string
          notas?: string | null
          porcentaje_avance?: number
          proyecto_id: string
          subcontrata_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          edificio_id?: string | null
          especialidad?: string | null
          estado?: string
          fecha_fin_prevista?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_prevista?: string | null
          fecha_inicio_real?: string | null
          id?: string
          importe_contratado?: number
          nombre_subcontrata?: string
          notas?: string | null
          porcentaje_avance?: number
          proyecto_id?: string
          subcontrata_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcontratas_proyecto_edificio_id_fkey"
            columns: ["edificio_id"]
            isOneToOne: false
            referencedRelation: "edificios_proyecto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcontratas_proyecto_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcontratas_proyecto_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      sugerencias_documento: {
        Row: {
          aplicada_por_id: string | null
          campo_afectado: string | null
          confianza: number | null
          created_at: string
          descripcion: string
          documento_id: string | null
          estado: string
          fecha_aplicacion: string | null
          id: string
          notas: string | null
          proyecto_id: string
          tipo_sugerencia: string
          titulo: string
          updated_at: string
          valor_sugerido: string | null
        }
        Insert: {
          aplicada_por_id?: string | null
          campo_afectado?: string | null
          confianza?: number | null
          created_at?: string
          descripcion: string
          documento_id?: string | null
          estado?: string
          fecha_aplicacion?: string | null
          id?: string
          notas?: string | null
          proyecto_id: string
          tipo_sugerencia: string
          titulo: string
          updated_at?: string
          valor_sugerido?: string | null
        }
        Update: {
          aplicada_por_id?: string | null
          campo_afectado?: string | null
          confianza?: number | null
          created_at?: string
          descripcion?: string
          documento_id?: string | null
          estado?: string
          fecha_aplicacion?: string | null
          id?: string
          notas?: string | null
          proyecto_id?: string
          tipo_sugerencia?: string
          titulo?: string
          updated_at?: string
          valor_sugerido?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sugerencias_documento_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sugerencias_documento_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      tareas_cronograma: {
        Row: {
          codigo: string
          created_at: string | null
          cronograma_id: string
          dependencia_tipo: string | null
          descripcion: string | null
          duracion_dias: number | null
          estado: string | null
          evidencia_tipo: string | null
          fecha_fin_planificada: string | null
          fecha_fin_real: string | null
          fecha_inicio_planificada: string | null
          fecha_inicio_real: string | null
          id: string
          lag_dias: number | null
          nivel: number | null
          nombre: string
          orden: number | null
          progreso: number | null
          requiere_evidencia: boolean | null
          responsable_id: string | null
          responsable_tipo: string | null
          subcontrata_id: string | null
          tarea_dependencia_id: string | null
          tarea_padre_id: string | null
          tipo: string
          updated_at: string | null
          visible_portal: boolean | null
        }
        Insert: {
          codigo: string
          created_at?: string | null
          cronograma_id: string
          dependencia_tipo?: string | null
          descripcion?: string | null
          duracion_dias?: number | null
          estado?: string | null
          evidencia_tipo?: string | null
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          id?: string
          lag_dias?: number | null
          nivel?: number | null
          nombre: string
          orden?: number | null
          progreso?: number | null
          requiere_evidencia?: boolean | null
          responsable_id?: string | null
          responsable_tipo?: string | null
          subcontrata_id?: string | null
          tarea_dependencia_id?: string | null
          tarea_padre_id?: string | null
          tipo: string
          updated_at?: string | null
          visible_portal?: boolean | null
        }
        Update: {
          codigo?: string
          created_at?: string | null
          cronograma_id?: string
          dependencia_tipo?: string | null
          descripcion?: string | null
          duracion_dias?: number | null
          estado?: string | null
          evidencia_tipo?: string | null
          fecha_fin_planificada?: string | null
          fecha_fin_real?: string | null
          fecha_inicio_planificada?: string | null
          fecha_inicio_real?: string | null
          id?: string
          lag_dias?: number | null
          nivel?: number | null
          nombre?: string
          orden?: number | null
          progreso?: number | null
          requiere_evidencia?: boolean | null
          responsable_id?: string | null
          responsable_tipo?: string | null
          subcontrata_id?: string | null
          tarea_dependencia_id?: string | null
          tarea_padre_id?: string | null
          tipo?: string
          updated_at?: string | null
          visible_portal?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "tareas_cronograma_cronograma_id_fkey"
            columns: ["cronograma_id"]
            isOneToOne: false
            referencedRelation: "cronograma_edificio"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tareas_cronograma_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tareas_cronograma_tarea_dependencia_id_fkey"
            columns: ["tarea_dependencia_id"]
            isOneToOne: false
            referencedRelation: "tareas_cronograma"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tareas_cronograma_tarea_padre_id_fkey"
            columns: ["tarea_padre_id"]
            isOneToOne: false
            referencedRelation: "tareas_cronograma"
            referencedColumns: ["id"]
          },
        ]
      }
      tareas_produccion: {
        Row: {
          asignado_a_id: string | null
          created_at: string
          descripcion: string | null
          estado: Database["public"]["Enums"]["estado_tarea"]
          fecha_fin: string | null
          fecha_inicio: string | null
          horas_estimadas: number | null
          horas_reales: number | null
          id: string
          nombre: string
          notas: string | null
          orden_ejecucion: number
          orden_id: string
          progreso: number
          updated_at: string
        }
        Insert: {
          asignado_a_id?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: Database["public"]["Enums"]["estado_tarea"]
          fecha_fin?: string | null
          fecha_inicio?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          nombre: string
          notas?: string | null
          orden_ejecucion?: number
          orden_id: string
          progreso?: number
          updated_at?: string
        }
        Update: {
          asignado_a_id?: string | null
          created_at?: string
          descripcion?: string | null
          estado?: Database["public"]["Enums"]["estado_tarea"]
          fecha_fin?: string | null
          fecha_inicio?: string | null
          horas_estimadas?: number | null
          horas_reales?: number | null
          id?: string
          nombre?: string
          notas?: string | null
          orden_ejecucion?: number
          orden_id?: string
          progreso?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tareas_produccion_asignado_a_id_fkey"
            columns: ["asignado_a_id"]
            isOneToOne: false
            referencedRelation: "trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tareas_produccion_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "ordenes_produccion"
            referencedColumns: ["id"]
          },
        ]
      }
      tarifas_montaje_ee: {
        Row: {
          activo: boolean | null
          coste_hora_base: number
          created_at: string | null
          descripcion: string | null
          dificultad: string
          factor_multiplicador: number
          id: string
          rendimiento_m2_hora: number
        }
        Insert: {
          activo?: boolean | null
          coste_hora_base?: number
          created_at?: string | null
          descripcion?: string | null
          dificultad?: string
          factor_multiplicador?: number
          id?: string
          rendimiento_m2_hora?: number
        }
        Update: {
          activo?: boolean | null
          coste_hora_base?: number
          created_at?: string | null
          descripcion?: string | null
          dificultad?: string
          factor_multiplicador?: number
          id?: string
          rendimiento_m2_hora?: number
        }
        Relationships: []
      }
      tarifas_subcontrata: {
        Row: {
          concepto: string
          created_at: string
          id: string
          notas: string | null
          precio_unitario: number
          subcontrata_id: string
          unidad: string
          vigente_desde: string | null
          vigente_hasta: string | null
        }
        Insert: {
          concepto: string
          created_at?: string
          id?: string
          notas?: string | null
          precio_unitario?: number
          subcontrata_id: string
          unidad?: string
          vigente_desde?: string | null
          vigente_hasta?: string | null
        }
        Update: {
          concepto?: string
          created_at?: string
          id?: string
          notas?: string | null
          precio_unitario?: number
          subcontrata_id?: string
          unidad?: string
          vigente_desde?: string | null
          vigente_hasta?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tarifas_subcontrata_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      tipos_documento_sc: {
        Row: {
          activo: boolean
          categoria: Database["public"]["Enums"]["categoria_documento_sc"]
          created_at: string
          dias_aviso_caducidad: number | null
          dias_aviso_urgente: number | null
          id: string
          nombre: string
          obligatorio: boolean
          orden: number
          permite_multiple: boolean
          requiere_caducidad: boolean
        }
        Insert: {
          activo?: boolean
          categoria: Database["public"]["Enums"]["categoria_documento_sc"]
          created_at?: string
          dias_aviso_caducidad?: number | null
          dias_aviso_urgente?: number | null
          id?: string
          nombre: string
          obligatorio?: boolean
          orden?: number
          permite_multiple?: boolean
          requiere_caducidad?: boolean
        }
        Update: {
          activo?: boolean
          categoria?: Database["public"]["Enums"]["categoria_documento_sc"]
          created_at?: string
          dias_aviso_caducidad?: number | null
          dias_aviso_urgente?: number | null
          id?: string
          nombre?: string
          obligatorio?: boolean
          orden?: number
          permite_multiple?: boolean
          requiere_caducidad?: boolean
        }
        Relationships: []
      }
      tipos_proyecto_config: {
        Row: {
          activo: boolean
          codigo: Database["public"]["Enums"]["tipo_proyecto"]
          created_at: string
          descripcion: string | null
          estructura_costes: Json | null
          fases: Json
          id: string
          nombre: string
        }
        Insert: {
          activo?: boolean
          codigo: Database["public"]["Enums"]["tipo_proyecto"]
          created_at?: string
          descripcion?: string | null
          estructura_costes?: Json | null
          fases?: Json
          id?: string
          nombre: string
        }
        Update: {
          activo?: boolean
          codigo?: Database["public"]["Enums"]["tipo_proyecto"]
          created_at?: string
          descripcion?: string | null
          estructura_costes?: Json | null
          fases?: Json
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      trabajadores: {
        Row: {
          activo: boolean
          apellidos: string | null
          categoria_laboral_id: string | null
          centro_trabajo_id: string | null
          codigo: string
          coste_hora: number | null
          created_at: string
          departamento_id: string | null
          dias_trabajo_mes: number | null
          dieta_diaria: number | null
          email: string | null
          estatus_id: string | null
          fecha_alta: string
          fecha_baja: string | null
          gratificacion_mensual: number | null
          horas_jornada_diaria: number | null
          id: string
          kilometraje_eur_km: number | null
          nombre_importado: string | null
          plus_peligrosidad: number | null
          plus_productividad: number | null
          precio_hora_extra: number | null
          precio_hora_nocturna: number | null
          profile_id: string | null
          puesto: string | null
          puesto_id: string | null
          salario_liquido_mensual: number | null
          telefono: string | null
          updated_at: string
        }
        Insert: {
          activo?: boolean
          apellidos?: string | null
          categoria_laboral_id?: string | null
          centro_trabajo_id?: string | null
          codigo: string
          coste_hora?: number | null
          created_at?: string
          departamento_id?: string | null
          dias_trabajo_mes?: number | null
          dieta_diaria?: number | null
          email?: string | null
          estatus_id?: string | null
          fecha_alta?: string
          fecha_baja?: string | null
          gratificacion_mensual?: number | null
          horas_jornada_diaria?: number | null
          id?: string
          kilometraje_eur_km?: number | null
          nombre_importado?: string | null
          plus_peligrosidad?: number | null
          plus_productividad?: number | null
          precio_hora_extra?: number | null
          precio_hora_nocturna?: number | null
          profile_id?: string | null
          puesto?: string | null
          puesto_id?: string | null
          salario_liquido_mensual?: number | null
          telefono?: string | null
          updated_at?: string
        }
        Update: {
          activo?: boolean
          apellidos?: string | null
          categoria_laboral_id?: string | null
          centro_trabajo_id?: string | null
          codigo?: string
          coste_hora?: number | null
          created_at?: string
          departamento_id?: string | null
          dias_trabajo_mes?: number | null
          dieta_diaria?: number | null
          email?: string | null
          estatus_id?: string | null
          fecha_alta?: string
          fecha_baja?: string | null
          gratificacion_mensual?: number | null
          horas_jornada_diaria?: number | null
          id?: string
          kilometraje_eur_km?: number | null
          nombre_importado?: string | null
          plus_peligrosidad?: number | null
          plus_productividad?: number | null
          precio_hora_extra?: number | null
          precio_hora_nocturna?: number | null
          profile_id?: string | null
          puesto?: string | null
          puesto_id?: string | null
          salario_liquido_mensual?: number | null
          telefono?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trabajadores_categoria_laboral_id_fkey"
            columns: ["categoria_laboral_id"]
            isOneToOne: false
            referencedRelation: "categorias_laborales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_centro_trabajo_id_fkey"
            columns: ["centro_trabajo_id"]
            isOneToOne: false
            referencedRelation: "centros_trabajo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_departamento_id_fkey"
            columns: ["departamento_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_estatus_id_fkey"
            columns: ["estatus_id"]
            isOneToOne: false
            referencedRelation: "estatus_trabajadores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_puesto_id_fkey"
            columns: ["puesto_id"]
            isOneToOne: false
            referencedRelation: "puestos"
            referencedColumns: ["id"]
          },
        ]
      }
      trabajadores_subcontrata: {
        Row: {
          apellidos: string
          created_at: string
          dni: string | null
          estado: Database["public"]["Enums"]["estado_trabajador_sc"]
          fecha_alta: string
          fecha_baja: string | null
          id: string
          nombre: string
          numero_ss: string | null
          proveedor_id: string
          proyecto_id: string | null
          puesto: string | null
          updated_at: string
        }
        Insert: {
          apellidos: string
          created_at?: string
          dni?: string | null
          estado?: Database["public"]["Enums"]["estado_trabajador_sc"]
          fecha_alta?: string
          fecha_baja?: string | null
          id?: string
          nombre: string
          numero_ss?: string | null
          proveedor_id: string
          proyecto_id?: string | null
          puesto?: string | null
          updated_at?: string
        }
        Update: {
          apellidos?: string
          created_at?: string
          dni?: string | null
          estado?: Database["public"]["Enums"]["estado_trabajador_sc"]
          fecha_alta?: string
          fecha_baja?: string | null
          id?: string
          nombre?: string
          numero_ss?: string | null
          proveedor_id?: string
          proyecto_id?: string | null
          puesto?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trabajadores_subcontrata_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajadores_subcontrata_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
        ]
      }
      trabajos_subcontrata: {
        Row: {
          cantidad_certificada: number | null
          cantidad_contratada: number
          cantidad_ejecutada: number | null
          created_at: string
          descripcion: string
          estado: string
          fase: string | null
          fecha_fin: string | null
          fecha_inicio: string | null
          id: string
          importe_certificado: number | null
          importe_contratado: number
          notas: string | null
          precio_unitario: number
          proyecto_id: string
          subcontrata_id: string
          unidad: string
          updated_at: string
        }
        Insert: {
          cantidad_certificada?: number | null
          cantidad_contratada: number
          cantidad_ejecutada?: number | null
          created_at?: string
          descripcion: string
          estado?: string
          fase?: string | null
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          importe_certificado?: number | null
          importe_contratado: number
          notas?: string | null
          precio_unitario: number
          proyecto_id: string
          subcontrata_id: string
          unidad?: string
          updated_at?: string
        }
        Update: {
          cantidad_certificada?: number | null
          cantidad_contratada?: number
          cantidad_ejecutada?: number | null
          created_at?: string
          descripcion?: string
          estado?: string
          fase?: string | null
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id?: string
          importe_certificado?: number | null
          importe_contratado?: number
          notas?: string | null
          precio_unitario?: number
          proyecto_id?: string
          subcontrata_id?: string
          unidad?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trabajos_subcontrata_proyecto_id_fkey"
            columns: ["proyecto_id"]
            isOneToOne: false
            referencedRelation: "proyectos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trabajos_subcontrata_subcontrata_id_fkey"
            columns: ["subcontrata_id"]
            isOneToOne: false
            referencedRelation: "subcontratas"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      usuarios_proveedor: {
        Row: {
          activo: boolean
          created_at: string
          email: string
          id: string
          proveedor_id: string
          rol: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          activo?: boolean
          created_at?: string
          email: string
          id?: string
          proveedor_id: string
          rol?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          activo?: boolean
          created_at?: string
          email?: string
          id?: string
          proveedor_id?: string
          rol?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "usuarios_proveedor_proveedor_id_fkey"
            columns: ["proveedor_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      v_articulos: {
        Row: {
          activo: boolean | null
          articulo_mo_id: string | null
          articulo_origen_id: string | null
          capitulo_id: string | null
          centro_coste: string | null
          codigo_interno: string | null
          created_at: string | null
          created_by: string | null
          departamento_responsable_id: string | null
          descripcion: string | null
          descripcion_larga: string | null
          es_mano_obra: boolean | null
          estado: Database["public"]["Enums"]["estado_registro"] | null
          familia_id: string | null
          genera_mano_obra: boolean | null
          horas_estandar_por_unidad: number | null
          id: string | null
          notas: string | null
          precio_base: number | null
          precio_objetivo: number | null
          precio_venta: number | null
          propiedades: Json | null
          proveedor_principal_id: string | null
          referencia_proveedor: string | null
          stock_actual: number | null
          stock_minimo: number | null
          subfamilia_id: string | null
          tipo_coste_id: string | null
          unidad: string | null
          updated_at: string | null
          updated_by: string | null
          version: number | null
        }
        Insert: {
          activo?: boolean | null
          articulo_mo_id?: string | null
          articulo_origen_id?: string | null
          capitulo_id?: string | null
          centro_coste?: string | null
          codigo_interno?: string | null
          created_at?: string | null
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion?: string | null
          descripcion_larga?: string | null
          es_mano_obra?: boolean | null
          estado?: Database["public"]["Enums"]["estado_registro"] | null
          familia_id?: string | null
          genera_mano_obra?: boolean | null
          horas_estandar_por_unidad?: number | null
          id?: string | null
          notas?: string | null
          precio_base?: number | null
          precio_objetivo?: number | null
          precio_venta?: number | null
          propiedades?: Json | null
          proveedor_principal_id?: string | null
          referencia_proveedor?: string | null
          stock_actual?: number | null
          stock_minimo?: number | null
          subfamilia_id?: string | null
          tipo_coste_id?: string | null
          unidad?: string | null
          updated_at?: string | null
          updated_by?: string | null
          version?: number | null
        }
        Update: {
          activo?: boolean | null
          articulo_mo_id?: string | null
          articulo_origen_id?: string | null
          capitulo_id?: string | null
          centro_coste?: string | null
          codigo_interno?: string | null
          created_at?: string | null
          created_by?: string | null
          departamento_responsable_id?: string | null
          descripcion?: string | null
          descripcion_larga?: string | null
          es_mano_obra?: boolean | null
          estado?: Database["public"]["Enums"]["estado_registro"] | null
          familia_id?: string | null
          genera_mano_obra?: boolean | null
          horas_estandar_por_unidad?: number | null
          id?: string | null
          notas?: string | null
          precio_base?: number | null
          precio_objetivo?: number | null
          precio_venta?: number | null
          propiedades?: Json | null
          proveedor_principal_id?: string | null
          referencia_proveedor?: string | null
          stock_actual?: number | null
          stock_minimo?: number | null
          subfamilia_id?: string | null
          tipo_coste_id?: string | null
          unidad?: string | null
          updated_at?: string | null
          updated_by?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "compras_articulos_articulo_mo_id_fkey"
            columns: ["articulo_mo_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_mo_id_fkey"
            columns: ["articulo_mo_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_origen_id_fkey"
            columns: ["articulo_origen_id"]
            isOneToOne: false
            referencedRelation: "compras_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_articulo_origen_id_fkey"
            columns: ["articulo_origen_id"]
            isOneToOne: false
            referencedRelation: "v_articulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_capitulo_id_fkey"
            columns: ["capitulo_id"]
            isOneToOne: false
            referencedRelation: "compras_capitulos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_departamento_responsable_id_fkey"
            columns: ["departamento_responsable_id"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_familia_id_fkey"
            columns: ["familia_id"]
            isOneToOne: false
            referencedRelation: "compras_familias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_proveedor_principal_id_fkey"
            columns: ["proveedor_principal_id"]
            isOneToOne: false
            referencedRelation: "proveedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_subfamilia_id_fkey"
            columns: ["subfamilia_id"]
            isOneToOne: false
            referencedRelation: "compras_subfamilias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compras_articulos_tipo_coste_id_fkey"
            columns: ["tipo_coste_id"]
            isOneToOne: false
            referencedRelation: "compras_tipos_coste"
            referencedColumns: ["id"]
          },
        ]
      }
      v_evolucion_costos: {
        Row: {
          campo_modificado: string | null
          created_at: string | null
          diferencia: number | null
          entidad_codigo: string | null
          entidad_id: string | null
          entidad_nombre: string | null
          entidad_tipo: Database["public"]["Enums"]["tipo_entidad_coste"] | null
          evento: Database["public"]["Enums"]["tipo_evento_coste"] | null
          id: string | null
          motivo: string | null
          periodo_anio: number | null
          periodo_mes: number | null
          porcentaje_cambio: number | null
          proyecto_nombre: string | null
          valor_anterior: number | null
          valor_nuevo: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      actualizar_progreso_instancia: {
        Args: { p_instancia_id: string }
        Returns: undefined
      }
      asegurar_registros_mensuales_anio_actual: { Args: never; Returns: Json }
      avanzar_bloque: {
        Args: {
          p_bloque_proyecto_id: string
          p_nuevo_estado: Database["public"]["Enums"]["estado_bloque_cronograma"]
          p_usuario_id?: string
        }
        Returns: boolean
      }
      avanzar_fase_proyecto: {
        Args: { p_decision_id?: string; p_fase_actual_id: string }
        Returns: Json
      }
      buscar_cte: {
        Args: {
          p_categorias?: string[]
          p_consulta: string
          p_limite?: number
          p_tipos?: string[]
        }
        Returns: {
          chunk_id: string
          contenido: string
          documento_codigo: string
          documento_nombre: string
          pagina: number
          relevancia: number
          seccion: string
        }[]
      }
      calcular_conversion_unidad: {
        Args: {
          p_cantidad: number
          p_unidad_destino: string
          p_unidad_origen: string
        }
        Returns: Json
      }
      calcular_habitaciones_maximas_vi: {
        Args: { p_plantas?: number; p_superficie_m2: number }
        Returns: Json
      }
      calcular_horas_op: {
        Args: { p_cantidad: number; p_estructura_id: string }
        Returns: number
      }
      calcular_precio_modelo: {
        Args: { p_margen_config_codigo?: string; p_superficie_m2: number }
        Returns: Json
      }
      calcular_superficie_maxima_vi: {
        Args: { p_informe_id: string; p_modelo_id: string }
        Returns: Json
      }
      check_diarios_sin_cerrar: { Args: never; Returns: undefined }
      clonar_escenario_a_proyecto: {
        Args: { p_escenario_id: string; p_proyecto_id: string }
        Returns: string
      }
      compras_cargar_partidas_proyecto: {
        Args: { p_proyecto_id: string }
        Returns: number
      }
      compras_generar_codigo: { Args: { p_prefijo: string }; Returns: string }
      contar_docs_ee_sin_clasificar: {
        Args: { p_proyecto_estructura_id: string }
        Returns: number
      }
      convertir_oferta_a_proyecto: {
        Args: { p_oferta_id: string }
        Returns: string
      }
      crear_contrato_desde_oferta: {
        Args: { p_envio_oferta_id: string }
        Returns: string
      }
      crear_cronograma_edificio: {
        Args: { p_edificio_id: string }
        Returns: undefined
      }
      desbloquear_fases_proyecto: {
        Args: { p_contrato_id: string }
        Returns: number
      }
      detectar_ciclo_estructura: {
        Args: { p_hija_id: string; p_padre_id: string }
        Returns: boolean
      }
      documento_edificio_existe_por_hash: {
        Args: { p_edificio_id: string; p_hash: string }
        Returns: boolean
      }
      documento_ee_existe_por_checksum: {
        Args: { p_checksum: string; p_proyecto_estructura_id: string }
        Returns: boolean
      }
      documento_existe_por_hash: {
        Args: { p_hash: string; p_proyecto_id: string }
        Returns: boolean
      }
      generar_numero_contrato: {
        Args: { p_proyecto_id: string }
        Returns: string
      }
      generar_numero_oferta: {
        Args: { p_proyecto_id: string }
        Returns: string
      }
      generar_registros_mensuales_anio: {
        Args: { p_anio?: number }
        Returns: Json
      }
      generar_registros_mensuales_trabajador: {
        Args: { p_anio?: number; p_trabajador_id: string }
        Returns: number
      }
      generar_token_portal: {
        Args: { p_dias_validez?: number; p_proyecto_id: string }
        Returns: string
      }
      get_next_id: {
        Args: { p_nombre: string; p_prefix: string }
        Returns: string
      }
      get_next_proyecto_id: {
        Args: {
          p_nombre: string
          p_tipo: Database["public"]["Enums"]["tipo_proyecto"]
        }
        Returns: string
      }
      get_public_schema: { Args: never; Returns: Json }
      has_role:
        | { Args: { _role: string; _user_id: string }; Returns: boolean }
        | {
            Args: {
              _role: Database["public"]["Enums"]["app_role"]
              _user_id: string
            }
            Returns: boolean
          }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      obtener_contexto_cte: {
        Args: { p_limite?: number }
        Returns: {
          categoria: string
          chunk_id: string
          contenido: string
          documento_codigo: string
          documento_nombre: string
          seccion: string
        }[]
      }
      propagar_recalculo_cascada: {
        Args: { p_estructura_id: string }
        Returns: number
      }
      puede_avanzar_bloque: {
        Args: { p_bloque_proyecto_id: string }
        Returns: boolean
      }
      puede_iniciar_elemento: {
        Args: {
          p_elemento_id: string
          p_proyecto_id: string
          p_tipo_elemento: string
        }
        Returns: Json
      }
      recalcular_coste_estructura: {
        Args: { p_estructura_id: string }
        Returns: Json
      }
      recalcular_costes_estructura_espacial: {
        Args: { p_proyecto_estructura_id: string }
        Returns: undefined
      }
      recalcular_costes_proyecto_estructura: {
        Args: { p_proyecto_estructura_id: string }
        Returns: Json
      }
      recalcular_por_cambio_articulo: {
        Args: { p_articulo_id: string }
        Returns: number
      }
      recalcular_totales_oferta: {
        Args: { p_oferta_id: string }
        Returns: Json
      }
      registrar_cambio_costo: {
        Args: {
          p_campo_modificado?: string
          p_datos_contexto?: Json
          p_entidad_codigo: string
          p_entidad_id: string
          p_entidad_nombre: string
          p_entidad_tipo: Database["public"]["Enums"]["tipo_entidad_coste"]
          p_evento: Database["public"]["Enums"]["tipo_evento_coste"]
          p_motivo?: string
          p_proyecto_id?: string
          p_valor_anterior?: number
          p_valor_nuevo?: number
        }
        Returns: string
      }
      registrar_decision_bloqueo: {
        Args: {
          p_bloqueo_id: string
          p_decidido_por_id?: string
          p_decision_tomada: string
          p_impacto_coste?: number
          p_impacto_plazo?: number
          p_justificacion: string
          p_proyecto_id: string
          p_situacion: string
          p_titulo: string
        }
        Returns: string
      }
      validar_accion_sistema: {
        Args: { p_accion: string; p_proyecto_id: string; p_ptp_id?: string }
        Returns: Json
      }
      validar_configuracion_vi: {
        Args: { p_configuracion_id: string }
        Returns: Json
      }
      validar_ptp_para_accion: {
        Args: { p_proyecto_id: string; p_tipo_accion: string }
        Returns: Json
      }
      validar_token_portal: {
        Args: { p_token: string }
        Returns: {
          config: Json
          proyecto_id: string
          valido: boolean
        }[]
      }
      verificar_gate_fase: { Args: { p_fase_id: string }; Returns: Json }
    }
    Enums: {
      app_role:
        | "admin"
        | "gerencia"
        | "comercial"
        | "tecnico"
        | "produccion"
        | "compras"
        | "administracion"
        | "instalacion"
        | "diseno"
        | "encargado_tecnico"
      categoria_documento_sc:
        | "trabajador"
        | "empresa"
        | "general"
        | "maquinaria"
      estado_bloque_cronograma:
        | "pendiente"
        | "bloqueado"
        | "en_proceso"
        | "completado"
      estado_bloqueo: "activo" | "escalado" | "resuelto"
      estado_contrato:
        | "borrador"
        | "generado"
        | "enviado"
        | "aceptado"
        | "rechazado"
        | "anulado"
      estado_hito:
        | "pendiente"
        | "en_progreso"
        | "bloqueado"
        | "completado"
        | "cancelado"
      estado_instalacion:
        | "planificada"
        | "en_preparacion"
        | "en_curso"
        | "pausada"
        | "pendiente_recepcion"
        | "completada"
        | "incidencia"
      estado_linea_pedido: "pendiente" | "parcial" | "recibido" | "cancelado"
      estado_oferta_abante:
        | "borrador"
        | "en_revision"
        | "enviada"
        | "negociacion"
        | "aceptada"
        | "rechazada"
        | "perdida"
      estado_orden_prod_maestro:
        | "BORRADOR"
        | "EMITIDA"
        | "EN_PROCESO"
        | "CERRADA"
      estado_orden_produccion:
        | "planificada"
        | "preparacion"
        | "en_proceso"
        | "pausada"
        | "control_calidad"
        | "completada"
        | "cancelada"
      estado_pedido:
        | "borrador"
        | "pendiente_aprobacion"
        | "aprobado"
        | "enviado"
        | "parcial"
        | "recibido"
        | "cancelado"
      estado_proyecto:
        | "oferta"
        | "adjudicado"
        | "en_curso"
        | "pausado"
        | "completado"
        | "cancelado"
        | "desestimado"
      estado_ptp: "pendiente" | "en_elaboracion" | "validado" | "rechazado"
      estado_registro: "activo" | "inactivo" | "pendiente"
      estado_subcontrata: "activo" | "bloqueado"
      estado_tarea:
        | "pendiente"
        | "en_proceso"
        | "pausada"
        | "completada"
        | "cancelada"
      estado_trabajador_sc: "activo" | "inactivo"
      estado_validacion_doc: "pendiente" | "aprobado" | "rechazado"
      fase_abante:
        | "fase_0"
        | "fase_1"
        | "fase_2"
        | "fase_3"
        | "fase_4"
        | "fase_5"
        | "fase_6"
      nivel_estructura: "1" | "2" | "3"
      prioridad_orden: "baja" | "normal" | "alta" | "urgente"
      tipo_bloqueo: "tecnico" | "suministro" | "decision" | "externo"
      tipo_cliente: "empresa" | "particular" | "administracion_publica"
      tipo_componente_enum: "ARTICULO" | "ESTRUCTURA"
      tipo_coste:
        | "material"
        | "mano_obra_propia"
        | "subcontrata"
        | "transporte"
        | "maquinaria"
        | "indirecto"
        | "estructural"
        | "financiero"
        | "otro"
      tipo_dependencia_cronograma: "bloque" | "accion" | "departamento"
      tipo_documento:
        | "oferta"
        | "contrato"
        | "plano"
        | "especificacion"
        | "certificado"
        | "factura"
        | "albaran"
        | "acta"
        | "foto"
        | "correspondencia"
        | "otro"
      tipo_entidad_coste:
        | "trabajador"
        | "gasto_estructural"
        | "maquinaria"
        | "alquiler"
        | "proveedor"
        | "articulo"
        | "componente_sistema"
        | "modulo_sistema"
      tipo_estructura_enum: "MATERIAL" | "MO" | "MIXTO"
      tipo_evento_coste: "creacion" | "modificacion" | "baja" | "reactivacion"
      tipo_hito: "critico" | "control" | "informativo"
      tipo_proyecto: "VI" | "MO" | "EI" | "EE" | "PR" | "CI"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "gerencia",
        "comercial",
        "tecnico",
        "produccion",
        "compras",
        "administracion",
        "instalacion",
        "diseno",
        "encargado_tecnico",
      ],
      categoria_documento_sc: [
        "trabajador",
        "empresa",
        "general",
        "maquinaria",
      ],
      estado_bloque_cronograma: [
        "pendiente",
        "bloqueado",
        "en_proceso",
        "completado",
      ],
      estado_bloqueo: ["activo", "escalado", "resuelto"],
      estado_contrato: [
        "borrador",
        "generado",
        "enviado",
        "aceptado",
        "rechazado",
        "anulado",
      ],
      estado_hito: [
        "pendiente",
        "en_progreso",
        "bloqueado",
        "completado",
        "cancelado",
      ],
      estado_instalacion: [
        "planificada",
        "en_preparacion",
        "en_curso",
        "pausada",
        "pendiente_recepcion",
        "completada",
        "incidencia",
      ],
      estado_linea_pedido: ["pendiente", "parcial", "recibido", "cancelado"],
      estado_oferta_abante: [
        "borrador",
        "en_revision",
        "enviada",
        "negociacion",
        "aceptada",
        "rechazada",
        "perdida",
      ],
      estado_orden_prod_maestro: [
        "BORRADOR",
        "EMITIDA",
        "EN_PROCESO",
        "CERRADA",
      ],
      estado_orden_produccion: [
        "planificada",
        "preparacion",
        "en_proceso",
        "pausada",
        "control_calidad",
        "completada",
        "cancelada",
      ],
      estado_pedido: [
        "borrador",
        "pendiente_aprobacion",
        "aprobado",
        "enviado",
        "parcial",
        "recibido",
        "cancelado",
      ],
      estado_proyecto: [
        "oferta",
        "adjudicado",
        "en_curso",
        "pausado",
        "completado",
        "cancelado",
        "desestimado",
      ],
      estado_ptp: ["pendiente", "en_elaboracion", "validado", "rechazado"],
      estado_registro: ["activo", "inactivo", "pendiente"],
      estado_subcontrata: ["activo", "bloqueado"],
      estado_tarea: [
        "pendiente",
        "en_proceso",
        "pausada",
        "completada",
        "cancelada",
      ],
      estado_trabajador_sc: ["activo", "inactivo"],
      estado_validacion_doc: ["pendiente", "aprobado", "rechazado"],
      fase_abante: [
        "fase_0",
        "fase_1",
        "fase_2",
        "fase_3",
        "fase_4",
        "fase_5",
        "fase_6",
      ],
      nivel_estructura: ["1", "2", "3"],
      prioridad_orden: ["baja", "normal", "alta", "urgente"],
      tipo_bloqueo: ["tecnico", "suministro", "decision", "externo"],
      tipo_cliente: ["empresa", "particular", "administracion_publica"],
      tipo_componente_enum: ["ARTICULO", "ESTRUCTURA"],
      tipo_coste: [
        "material",
        "mano_obra_propia",
        "subcontrata",
        "transporte",
        "maquinaria",
        "indirecto",
        "estructural",
        "financiero",
        "otro",
      ],
      tipo_dependencia_cronograma: ["bloque", "accion", "departamento"],
      tipo_documento: [
        "oferta",
        "contrato",
        "plano",
        "especificacion",
        "certificado",
        "factura",
        "albaran",
        "acta",
        "foto",
        "correspondencia",
        "otro",
      ],
      tipo_entidad_coste: [
        "trabajador",
        "gasto_estructural",
        "maquinaria",
        "alquiler",
        "proveedor",
        "articulo",
        "componente_sistema",
        "modulo_sistema",
      ],
      tipo_estructura_enum: ["MATERIAL", "MO", "MIXTO"],
      tipo_evento_coste: ["creacion", "modificacion", "baja", "reactivacion"],
      tipo_hito: ["critico", "control", "informativo"],
      tipo_proyecto: ["VI", "MO", "EI", "EE", "PR", "CI"],
    },
  },
} as const
