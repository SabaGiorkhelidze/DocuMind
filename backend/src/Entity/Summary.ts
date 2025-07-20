import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document";

@Entity("summaries")
export class Summary {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Document, (document) => document.summaries)
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "text" })
  summaryText!: string;

  @Column({ type: "varchar", length: 255 })
  modelUsed!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}