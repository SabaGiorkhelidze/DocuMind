import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document";


@Entity("classifications")
export class Classification {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Document, (document) => document.classifications)
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "varchar", length: 100 })
  label!: string;

  @Column({ type: "float" })
  confidence!: number;

  @Column({ type: "varchar", length: 255 })
  modelUsed!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}