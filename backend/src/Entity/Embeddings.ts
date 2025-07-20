import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document"; 


@Entity("embeddings")
export class Embedding {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Document, (document) => document.embeddings)
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "float", array: true, default: () => "ARRAY[]::float[]" })
  vector!: number[];

  @Column({ type: "varchar", length: 255 })
  modelUsed!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}