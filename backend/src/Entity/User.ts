import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany  } from "typeorm";
import { Document } from "./Document";
import { Metrics } from "./Metrics";
import { AuditLog } from "./AuditLog";

@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    email!: string

    @Column()
    password!: string
    
    @Column()
    name!: string

    @CreateDateColumn({ type: "timestamptz" })
    createdAt!: Date

    @CreateDateColumn({ type: "timestamptz" })
    updatedAt!: Date

    @OneToMany(() => Document, (document) => document.user)
    documents!: Document[];
    

    @OneToMany(() => Metrics, (metrics) => metrics.user)
    metrics!: Metrics[] 

    @OneToMany(() => AuditLog, (auditLog) => auditLog.user)
    auditLogs!: AuditLog[]
}