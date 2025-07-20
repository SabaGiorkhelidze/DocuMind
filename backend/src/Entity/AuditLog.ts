import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document"; 
import { User } from "./User"; 

@Entity("audit_logs")
export class AuditLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.auditLogs)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column({ type: "varchar", length: 100 })
  action!: string;

  @ManyToOne(() => Document, { nullable: true })
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "jsonb" })
  details!: object;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  timestamp!: Date;
}